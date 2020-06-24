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
  nameProp;
  mobileProp;
  emailPropsu;
  passwordPropsu;
  nameProptu;
  @ViewChild('signUPForm') signupelement;
  @ViewChild('loginForm')  loginelement;
  @ViewChild('mclose') closebtn;
  constructor( private router:Router, private ds:DataserviceService ) { }

  ngOnInit(): void {

    if(localStorage.getItem('email'))
      this.router.navigate(['/dashboard']);
  }

  login()
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
        
        
        this.closebtn.nativeElement.click();
         this.router.navigate(['/dashboard']);

      }
      else{
        alert("undefined arguments");
      }
    })

   
  }
 
  showLogin()
  {
    
      this.loginelement.nativeElement.style.display="block"
      
      this.signupelement.nativeElement.style.display="none"
  }
  showSignup()
  {
    console.log(this.signupelement);
    console.log(this.loginelement);
    this.signupelement.nativeElement.style.display="block";

    this.loginelement.nativeElement.style.display="none"
      
    
  }
  
 SignUp()
 {
  this.ds.signup({role:"user", name:this.nameProp, email:this.emailPropsu, password:this.passwordPropsu, mobile:this.mobileProp})
  .subscribe((response)=>{
    if(response.status=="ok")
    {
      
   

      alert('registration successfull you will be redirected to login');
      this.router.navigate(['/login']);


    }
    else
    {
      alert("email id already in use registered by different email id");
    }
  })
}


}