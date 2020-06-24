import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('knowmore')knomoreElement;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Sign(){
    this.knomoreElement.nativeElement.click();
    this.router.navigate['/sign-in'];
  }

}
