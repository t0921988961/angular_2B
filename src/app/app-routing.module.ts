import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      // {
      //   path: 'contact', component: ContactComponent
      // },
      {
        path: '', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
  { path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
