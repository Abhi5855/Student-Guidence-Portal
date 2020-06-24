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
  @ViewChild('mclose')closebtn;
  
  constructor(private router:Router ,private ds:DataserviceService) { }

  ngOnInit(): void {
  }
  reloadPage(){
    window.location.href="localhost:4200/";
    window.location.reload();
    window.location.href="localhost:4200/sign-in";
  }
  signup()
  {
    
    this.ds.signup({name:this.nameProp,email:this.emailProp,pasword:this.passwordProp,mobile:this.mobileProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        alert("Registration Successfull You Will Be Re-Directed To Sign-In");
        alert("hello");
        this.closebtn.nativeElement.click();
        this.router.navigate(['/sign-in'])
        alert("hii");
      }
      else{
        alert("Email you entered alredy exits");
      }
    })
  }

}
