import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasestudyListComponent } from './casestudy/casestudy-list/casestudy-list.component';
import { CasestudyContentComponent } from './casestudy/casestudy-content/casestudy-content.component';


const routes: Routes = [
  {
    path: '', component: CasestudyListComponent,
    children: [
      { path: ':id', component: CasestudyContentComponent, },
    ],
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
