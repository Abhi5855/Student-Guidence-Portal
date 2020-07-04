import { Component, OnInit } from '@angular/core';
import { TimeTable } from '../models/timeTable';
import { DataserviceService } from '../dataservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tt = new TimeTable();

  isUpdate;
  constructor(private router:Router, private route:ActivatedRoute, private ds:DataserviceService) { }

  ngOnInit(): void {

          this.route.queryParamMap.subscribe((d)=>{
                    this.isUpdate = d.get('isUpdate');
                    alert(this.isUpdate);
          })

          if(!this.isUpdate)
          {
              this.ds.getTimeTable().subscribe((response)=>{
                if(response.status=="ok")
                {
                    this.router.navigate(['/dashboard/listtimetable']);
                }
                else
                {
                  alert("time table not found");
                }
              })
          }
          else
          {
            this.ds.getTimeTable().subscribe((response)=>{
              if(response.status=="ok")
              {
                 this.tt = response.data.tabledata;
              }
              else
              {
                alert("time table not found");
              }
            })
          }
  }
  save()
  {

    alert(JSON.stringify(this.tt));

    this.ds.save({email:localStorage.getItem('email'), tabledata:this.tt})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        alert("your time table created succesfully");
        //new attached
        this.router.navigate(['/dashboard/list-time-table'])
      }
      else{
        alert("something went wrong time table didn't create");
      }
    })
  }

  update()
  {
    alert(JSON.stringify(this.tt));

    this.ds.updateTimeTable({email:localStorage.getItem('email'), tabledata:this.tt})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        alert("your time table updated succesfully");
        this.router.navigate(['/dashboard/listtimetable']);
      }
      else{
        alert("something went wrong time table didn't create");
      }
    })


  }


}
