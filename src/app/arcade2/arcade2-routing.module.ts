import { Arcade2Component } from './arcade2.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: Arcade2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArcadeRoutingModule {
  static components = [
    Arcade2Component,
  ]
}

