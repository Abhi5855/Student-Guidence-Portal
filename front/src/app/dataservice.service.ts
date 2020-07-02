import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  baseUrl= "http://localhost:3000";


  constructor(private http:HttpClient) { }
  signup(d):any
  {
    
    return this.http.post(this.baseUrl+'/sign-up',d);
  }

  signIn(d):any
  {
    return this.http.post(this.baseUrl+'/sign-in',d);
  }
  //here response will be returned from index .js sign in api.

  getQuery(d):any
  {
    return this.http.post(this.baseUrl+'/contact',d);
  }

  save(d):any
  {
    return this.http.post(this.baseUrl+'/table',d);
  }


  updateTimeTable(d):any
  {
    return this.http.post(this.baseUrl+'/updatetimetable',d);
  }
  

  getTimeTable():any
  {
    console.log(localStorage.getItem('email'));
    return this.http.post(this.baseUrl+'/gettable',{email:localStorage.getItem('email')});
  }

}
