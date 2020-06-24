import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('mclose')closebtn;
  constructor(private router:Router, private ds:DataserviceService) { }

  ngOnInit(): void {
    if(localStorage.getItem('email'))
    {
      this.router.navigate(['/dashboard']);
    }
  }
  signin()
  {
    this.ds.signin({email:this.emailProp,password:this.passwordProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        localStorage.setItem('name',response.data[0].name);
        localStorage.setItem('email',response.data[0].email);
        this.closebtn.nativeElement.click();
        this.router.navigate(['/dashboard']);
      }
      else{
        alert("Email or Password is incorrect");
      }
    })
  }

}
