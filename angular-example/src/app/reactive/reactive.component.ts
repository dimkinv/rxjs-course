import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  input = new FormControl('', [Validators.required]);
  ngOnInit(): void {
    this.input.valueChanges.subscribe(newValue => {
      console.log(newValue);
    })

    this.input.statusChanges.subscribe(newStatus => {
      console.log(newStatus);
    })
  }

}
