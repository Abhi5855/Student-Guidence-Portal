import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nameProp;
  emailProp;
  stateProp;
  subProp;
  msgProp;
  constructor(private ds:DataserviceService) { }

  ngOnInit(): void {
  }
  getQuery()
  {
    alert("hello");
    this.ds.getQuery({name:this.nameProp,email:this.emailProp,subject:this.subProp,state:this.stateProp,message:this.msgProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        alert("We have received your query.")
      }
      else
      {
        alert("something went wrong we didn't get anything.")
      }
    })
  }
}
