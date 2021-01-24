import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonRequestComponent } from './json-request/json-request.component';
import { Test1Component } from './test1/test1.component';


const routes: Routes = [
  {
    path: 'test1/:id',
    component: Test1Component
  },
  {
    path: 'json-request',
    component: JsonRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
