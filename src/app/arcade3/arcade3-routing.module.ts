import { Arcade3Component } from './arcade3.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: Arcade3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArcadeRoutingModule {
  static components = [
    Arcade3Component,
  ]
}
