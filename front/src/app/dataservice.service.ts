import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  signup(d):any
  {
    
    return this.http.post('mongodb+srv://jeet2027:jeet@2027@cluster0-v2qwj.mongodb.net/mydatabase?retryWrites=true&w=majority',d);
  }

  signin(d):any
  {
    return this.http.post('mongodb+srv://jeet2027:jeet@2027@cluster0-v2qwj.mongodb.net/mydatabase?retryWrites=true&w=majority',d)
  }
  //here response will be returned from index .js sign in api.
}
