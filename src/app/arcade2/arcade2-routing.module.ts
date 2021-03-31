import { Arcade2Component } from './arcade2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: Arcade2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Arcade2RoutingModule {
  static components = [
    Arcade2Component,
  ]
}
