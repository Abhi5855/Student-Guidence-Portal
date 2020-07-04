import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  emailProp;
  passwordProp;
  constructor( private router:Router, private ds:DataserviceService ) { }

  ngOnInit(): void {

    if(localStorage.getItem('email'))
      this.router.navigate(['/dashboard']);
  }

  login()
  {
      
    this.ds.signIn({ email:this.emailProp, password:this.passwordProp})
    .subscribe((response)=>{
      // alert("hello");
      alert(JSON.stringify(response));
      if(response.status=="ok")
      {
         
        localStorage.setItem('name', response.data[0].name);          
        localStorage.setItem('email', response.data[0].email);
        localStorage.setItem('role', response.data[0].role);
         this.router.navigate(['/dashboard']);

      }
      else{
        alert("undefined arguments");
      }
    })
  }
}