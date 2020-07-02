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

  }
  save()
  {
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
