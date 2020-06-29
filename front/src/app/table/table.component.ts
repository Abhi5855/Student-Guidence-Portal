import { Component, OnInit } from '@angular/core';
import { TimeTable } from '../models/timeTable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tt = new TimeTable();

  constructor() { }

  ngOnInit(): void {
  }

}
