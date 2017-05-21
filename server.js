//pulls in environment variables from file named .env
require('dotenv').config({silent: true});

//Core Modules
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

//Authentication Modules
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);
var bcrypt = require('bcryptjs');

//Express Modules
var express = require('express');
var app = express();

//Database Modules, and establishing connection
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL);
var User = require('./models/user.js');
var Location = require('./models/location.js');



//Middlewares AND authentication
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//On startup, generate an access token for yelp
let yelp_access_token = ''
let apiauthdata = { 
		grant_type: 'client_credentials',
		client_id: process.env.YELP_ID,
		client_secret: process.env.YELP_SECRET
	}
request.post(
	'https://api.yelp.com/oauth2/token',//URL
	{ form: apiauthdata },//DATA
	function(err, res){ 
		yelp_access_token = JSON.parse(res.body).access_token 
		console.log('yelp access token: ' + yelp_access_token)

	}
)



//Authentication Middleware
passport.use(new LocalStrategy(
    function (username, password, done){
        User.findOne({username: username.toLowerCase()}, function (err, user) {
            if (err) return done(err);
            if (!user) {
                return done(null, false, {message: 'Incorrect Username.'});
            }
            if (!bcrypt.compareSync(password, user.password)){
                return done(null, false, {message: 'Incorrect Password'});
            }
            return done(null, user);
        });
    }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET,
    cookie: {maxAge: 1000*60*60*8},//ms*s*m*h
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.post('/api/login', passport.authenticate('local', {failureRedirect: '/badpass'}),
    function(req, res){
			  res.redirect('/');
    }
);
app.get('/api/logout', function(req, res){
	req.logout();
	res.send(true);
});






//API
//CREATE
app.post('/api/signup', function(req, res){
	console.log(req.body)
	User.find({username: req.body.username}, function(err, user){
		if (user.length) res.send('1')
		else {
			User.create({
				username: req.body.username,
				password: req.body.password,
				going: []
			})
			res.send("0")
		}
	})
})
//READ
app.get('/api/getplaces/:latitude/:longitude', function(req, res){
	console.log('getting places with header... ' + yelp_access_token)
	let options = {
		url: `https://api.yelp.com/v3/businesses/search?latitude=${req.params.latitude}&longitude=${req.params.longitude}&limit=10`,
		headers: {
			Authorization: "Bearer " + yelp_access_token
		}
	}
	request(options, function(err, response){
		let locs = JSON.parse(response.body).businesses
		let count = 0

		locs.forEach( (loc, i) => {
			Location.findOne({id: loc.id}, function(err, location){
				if (err) throw err
				location ? locs[i].going = location.going : locs[i].going = 0
				count++
				console.log[locs[i]]
				if (count === 10) res.send(locs)
			})
		})
	})
})
app.get('/api/updateGoing/:id', function(req, res){
	User.findOne({username: req.user.username}, function(err, user) {
		if (err) throw err;
		Location.findOne({id: req.params.id}, function(err, location){
			if (err) throw err;
			if (!location) {
				Location.create({id: req.params.id, going: 1})
				user.going.push(req.params.id)
				user.markModified('going')
				user.save()
				res.send("1")
			} else {
				if (user.going.indexOf(req.params.id) === -1) {
					location.going++
					location.save()
					user.going.push(req.params.id)
					user.markModified('going')
					user.save()
					res.send("1")
				} else {
					location.going--
					location.save()
					user.going.splice(user.going.indexOf(req.params.id), 1)
					user.markModified('going')
					user.save()
					res.send("0")
				}
			}
		})
	})
})
app.get('/api/userdata', function(req, res){
	req.user ? res.send(req.user) : res.sendStatus(400)
})








//serve the dist
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', function(req, res){
	res.sendFile('/client/dist/index.html')
})




//Listen
var port = process.env.PORT || 3001;
app.listen(port, function(){
    console.log('server listening on port ' + port)
});