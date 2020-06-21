import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  emailProp;
  passwordProp;
  constructor(private router:Router,ds:DataserviceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('email'))
    {
      this.router.navigate(['/dashboard']);
    }
  }
  signin()
  {
    this.passwordProp.signin({email:this.emailProp,password:this.passwordProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        localStorage.setItem('name',response.data[0].name);
        localStorage.setItem('email',response.data[0].email);
        this.router.navigate(['/dashboard']);
      }
      else{
        alert("credentials are incorrect");
      }
    })
  }

}
