import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from '../colors.component';


const routes: Routes = [
  // { path: 'colors', component: ColorsComponent },
  { path: 'colors', component: ColorsComponent, data: { title: '圖表' } },
  { path: 'colors/:type', component: ColorsComponent, data: { title: '圖表' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingRoutingModule { }
