import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-request',
  templateUrl: './json-request.component.html',
  styleUrls: ['./json-request.component.css']
})
export class JsonRequestComponent implements OnInit {

  data: unknown
  constructor() { }

  ngOnInit(): void {
    // TODO: * add HttpClientModule into app.module
    //       * inject HttpClient into current component
    //       * request https://dimkinv.github.io/node-workshop/json-source.json url and apply results to this.data
  }

}
