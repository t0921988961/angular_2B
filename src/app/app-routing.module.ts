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
        path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
