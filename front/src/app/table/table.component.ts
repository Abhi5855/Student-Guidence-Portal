import { Component, OnInit } from '@angular/core';
import { TimeTable } from '../models/timeTable';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tt = new TimeTable();


  constructor(private router:Router ,private ds:DataserviceService) { }

  ngOnInit(): void {
          this.ds.getTimeTable().subscribe((response)=>{
            if(response.status=="ok")
            {
                this.router.navigate(['/listtimetable']);
            }
            else
            {
               alert("time table not found");
            }
          })
  }
  save()
  {

    alert(JSON.stringify(this.tt));

    this.ds.save({tabledata:this.tt})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        alert("your time table created succesfully");
      }
      else{
        alert("something went wrong time table didn't create");
      }
    })
  }


}
