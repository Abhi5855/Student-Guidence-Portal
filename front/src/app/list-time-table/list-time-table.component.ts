import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';
import { TimeTable } from '../models/timeTable';

@Component({
  selector: 'app-list-time-table',
  templateUrl: './list-time-table.component.html',
  styleUrls: ['./list-time-table.component.css']
})
export class ListTimeTableComponent implements OnInit {
  tt 

  constructor(private router:Router ,private ds:DataserviceService) { }

  ngOnInit(): void {
          this.ds.getTimeTable().subscribe((response)=>{
            if(response.status=="ok")
            {
                this.tt= response.data;
            }
          })
  }
  

}
