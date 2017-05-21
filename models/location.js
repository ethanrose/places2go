var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var locationSchema = new Schema({
    id: String,
    going: Number
});

locationSchema.pre('save', function(next){
    next();
});

var Location = mongoose.model('Location', locationSchema);
module.exports = Location;