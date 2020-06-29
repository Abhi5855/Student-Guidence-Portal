import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exploreform',
  templateUrl: './exploreform.component.html',
  styleUrls: ['./exploreform.component.css']
})
export class ExploreformComponent implements OnInit {
  q1Prop1;
  q1Prop2;
  q2Prop1;
  q2Prop2;
  q2Prop3;
  q2Prop4;
  q2Prop5;
  q2Prop6;
  q3Prop1;
  q3Prop2;
  q3Prop3;
  q3Prop4;
  q3Prop5;
  q3Prop6;
  q4Prop1;
  q4Prop2;
  q4Prop3;
  q4Prop4;
  q5Prop1;
  q5Prop2;
  q5Prop3;
  q5Prop4;
  q5Prop5;
  constructor() { }

  ngOnInit(): void {
  }
  submit()
  {
    alert("hello");
    if((this.q1Prop1='option1') && (this.q2Prop1='option1') || (this.q1Prop1='option2') && (this.q2Prop1='option1'))
    {
      alert("As your medium is hindi and you have below 60% score in your recent class, so you should follow the study tips");
    }
  }
}
