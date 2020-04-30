import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  // tslint:disable-next-line:max-line-length
  { path: 'Binder_Jetting/PartPro350_xBC', loadChildren: () => import('./Binder_Jetting/partpro350-x-bc/partpro350-x-bc.module').then(m => m.Partpro350XBCModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'Color_fff/PartPro200_xTCS', loadChildren: () => import('./Color_fff/partpro200-x-tcs/partpro200-x-tcs.module').then(m => m.Partpro200XTCSModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'DLP/CastPro100_xP', loadChildren: () => import('./DLP/castpro100-x-p/castpro100-x-p.module').then(m => m.Castpro100XPModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'DLP/PartPro120_xP', loadChildren: () => import('./DLP/partpro120-x-p/partpro120-x-p.module').then(m => m.Partpro120XPModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'DLP/PartPro100_xP', loadChildren: () => import('./DLP/partpro100-x-p/partpro100-x-p.module').then(m => m.Partpro100XPModule) },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
