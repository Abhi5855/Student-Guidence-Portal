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
        
        this.router.navigate(['/sign-in'])
        
      }
      else{
        alert("Email you entered alredy exits");
      }
    })
  }
}
