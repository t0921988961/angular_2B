import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilamentComponent } from './filament/filament.component';
import { ResinComponent } from './resin/resin.component';


const routes: Routes = [
  {
    path: 'filament', component: FilamentComponent,
    data: {
      meta: {
        title: 'materialFilament.title',
        description: 'materialFilament.description'
      }
    }
  },
  {
    path: 'resin', component: ResinComponent,
    data: {
      meta: {
        title: 'materialResin.title',
        description: 'materialResin.description'
      }
    }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }
