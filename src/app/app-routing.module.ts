import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Arcade1Component } from './arcade1/arcade1.component';
import { Arcade2Component } from './arcade2/arcade2.component';

const routes: Routes = [
  {
    path: 'arcade1', 
    component: Arcade1Component
  },
  {
    path: 'arcade2',
    component: Arcade2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
