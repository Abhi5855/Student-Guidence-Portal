import { Component, OnInit, ViewChild } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  nameProp;
  mobileProp;
  emailProp;
  passwordProp;
  signup_form :any=document.getElementsByClassName('signup-form');
  login_form :any=document.getElementsByClassName('login-form')
  
  constructor(private router:Router ,private ds:DataserviceService) { }

  ngOnInit(): void {
  }
  signup()
  {
    
    this.ds.signup({name:this.nameProp,email:this.emailProp,password:this.passwordProp,mobile:this.mobileProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        alert("Registration Successfull You Will Be Re-Directed To Sign-In");
        alert("hello");
        this.router.navigate(['/sign-in'])
        alert("hii");
      }
      else{
        alert("Email you entered alredy exits");
      }
    })
  }
  signin()
  {
      
    this.ds.signIn({ email:this.emailProp, password:this.passwordProp})
    .subscribe((response)=>{
      alert("hello");
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
   signup_hide(){
     this.signup_form.style.display="none";
     this.login_form.style.display="block";
   }
    login_hide(){
     this.signup_form.style.display="block";
     this.login_form.style.display="none";
   }
 

}
