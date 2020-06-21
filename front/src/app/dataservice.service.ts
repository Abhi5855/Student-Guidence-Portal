import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  signup(d):any
  {
    return this.http.post('http://localhost:3000/sign-up',d);
  }

  signin(d):any
  {
    return this.http.post('http://localhost:3000/sign-in',d)
  }
}
