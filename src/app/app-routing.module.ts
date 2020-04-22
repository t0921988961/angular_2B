import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { ColorsComponent } from './utilities/colors/colors.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: ':lang', pathMatch: 'full', redirectTo: ':lang/dashboard' },
      { path: ':lang/dashboard', component: DashboardComponent },
      { path: 'page01', component: Page01Component },
      { path: 'page02', component: Page02Component },
      { path: 'charts', component: ChartsComponent },
      // { path: 'charts/:type', component: ChartsComponent },
      { path: 'tables', component: TablesComponent, canActivate: [AuthGuardGuard] },
      // {
      //   path: 'utilities',
      //   children: [
      //     { path: 'colors', component: ColorsComponent, data: { title: '圖表' } },
      //     { path: 'colors/:type', component: ColorsComponent, data: { title: '圖表' } }
      //   ]
      // },
      // tslint:disable-next-line: max-line-length
      { path: 'utilities', loadChildren: () => import('./utilities/colors/utilities-routing/utilities-routing.module').then(m => m.UtilitiesRoutingModule) },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // onSameUrlNavigation: 'reload' // 全站 reload
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
