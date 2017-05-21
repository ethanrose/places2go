import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: Http){}
  locations = []
  user: any = false

  getUserData() {
    this.http.get('/api/userdata')
            .toPromise()
            .then( res => this.user = res.json() )
            .catch( err => console.error(err) )
  }

  getLocationsAuto(position): Promise<any> {
    return this.http.get('/api/getplaces/'+position.coords.latitude+"/"+position.coords.longitude)
              .toPromise()
              .then( (res) => { this.locations = res.json() } )
              .catch( (err)=> console.log(err) )
  }

  handleSignup(f) {
    this.http.post(`/api/signup`, f.value)
              .toPromise()
              .then( (res)=> this.handleLogin(f) )
              .catch( (err)=> console.error(err) )
  }

  handleLogin(f) {
    this.http.post(`/api/login`, f.value)
              .toPromise()
              .then( (res)=> window.location.href = '/' )
              .catch( (err)=> document.getElementById('pass-container').className += " has-error" )
  }

  logout() {
    this.http.get('/api/logout')
              .toPromise()
              .then( res => window.location.href = '/' )
              .catch( (err)=> console.error(err) )
  }

  handleGoing(id, i): void {

    this.http.get('/api/updateGoing/'+this.locations[i].id)
            .toPromise()
            .then( (res)=> { console.log(res.json()) } )
            .catch( (err)=> { console.log(err) } )

    if (this.user.going.indexOf(this.locations[i].id) !== -1) {
      this.locations[i].going--
      this.user.going.splice(this.user.going.indexOf(id), 1)
    } else {
      this.locations[i].going++
      this.user.going.push(id)
    }
  }
  
  ngOnInit(){
    navigator.geolocation.getCurrentPosition((position)=>{
      this.getLocationsAuto(position)
    })
    this.getUserData()
  }
}

/*

categories
:
Array(2)
coordinates
:
Object
display_phone
:
"(206) 684-4075"
distance
:
1883.5166575059998
id
:
"kerry-park-seattle"
image_url
:
"https://s3-media3.fl.yelpcdn.com/bphoto/DOejrsx8yu3Ppl7PWxnCqw/o.jpg"
is_closed
:
false
location
:
Object
name
:
"Kerry Park"
phone
:
"+12066844075"
rating
:
4.5
review_count
:
717
transactions
:
Array(0)
url
:
"https://www.yelp.com/biz/kerry-park-seattle?adjust_creative=MhdFl-xPlygTy6L9mnJ_oQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=MhdFl-xPlygTy6L9mnJ_oQ"


*/