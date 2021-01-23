import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub-comp',
  templateUrl: './sub-comp.component.html',
  styleUrls: ['./sub-comp.component.css']
})
export class SubCompComponent implements OnInit {

  @Output()
  buttonClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(){
    this.buttonClick.emit('some event');
  }
}
