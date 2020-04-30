import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'filament', loadChildren: () => import('./filament/filament.module').then(m => m.FilamentModule) },
  { path: 'resin', loadChildren: () => import('./resin/resin.module').then(m => m.ResinModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }
