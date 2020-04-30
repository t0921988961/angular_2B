import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilamentComponent } from './filament.component';

const routes: Routes = [
  { path: '', component: FilamentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilamentRoutingModule { }
