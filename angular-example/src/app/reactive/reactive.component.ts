import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  isValid = '';
  content = '';
  constructor() { }

  input = new FormControl('', [Validators.required]);
  ngOnInit(): void {
    this.input.valueChanges.subscribe(newValue => {
      this.content = newValue;
      console.log(newValue);
    });

    this.input.statusChanges.subscribe(newStatus => {
      this.isValid = newStatus;
      console.log(newStatus);
    });
  }

}
