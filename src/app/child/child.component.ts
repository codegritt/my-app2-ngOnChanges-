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
  name='gokul';


  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    
    const loggedInValue = changes['loggedIn'];
    if(loggedInValue.currentValue===true){
      this.message='welcome back gokul';
    }else {
      this.message='please login';
    }
      
  }

  greetgokul(){
    alert('hey gokul');
  }

}
