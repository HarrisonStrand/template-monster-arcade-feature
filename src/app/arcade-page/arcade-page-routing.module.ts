import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Arcade1Component } from '../arcade1/arcade1.component';
import { Arcade2Component } from '../arcade2/arcade2.component';
// import { Arcade3Component } from '../arcade3/arcade3.component';

const routes: Routes = [
  {path: 'arcade1', component: Arcade1Component, pathMatch: 'full'},
  {path: 'arcade2', component: Arcade2Component, pathMatch: 'full'},
  // {path: 'arcade3', component: Arcade3Component, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArcadePageRoutingModule { }
