import { Component, OnInit, ViewChild } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-dashboardcontact',
  templateUrl: './dashboardcontact.component.html',
  styleUrls: ['./dashboardcontact.component.css']
})
export class DashboardcontactComponent implements OnInit {

  nameProp;
  emailProp;
  stateProp;
  subProp;
  msgProp;
  @ViewChild('contactForm') cf;
  constructor(private ds:DataserviceService) { }

  ngOnInit(): void {
  }
  getQuery()
  {
    if(this.cf.valid){
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
        else
        {
          alert("Please fill the form completely...!");
        }
   }

}
