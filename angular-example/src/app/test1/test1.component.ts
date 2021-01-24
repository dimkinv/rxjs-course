import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }
  clicked = 0
  id: string;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.id = params.id;
    })
  }

  subButtonClicked(){
    this.clicked ++;
  }
}
