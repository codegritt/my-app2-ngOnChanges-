import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {


  @Input()
  loggedIn!: boolean;
  message!: string;


  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
      
  }

}
