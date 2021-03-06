import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
// import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: ':lang', component: LayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      { path: 'home', component: HomeComponent },
      {
        path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'materials', loadChildren: () => import('./materials/materials.module').then(m => m.MaterialsModule)
      },
      {
        path: 'casestudy', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
      },
      {
        path: 'support', loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
      },
      {
        path: 'contact-us', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'story', loadChildren: () => import('./story/story.module').then(m => m.StoryModule)
      },
      {
        path: 'policy', loadChildren: () => import('./policy/policy.module').then(m => m.PolicyModule)
      },
      {
        path: 'terms-of-use', loadChildren: () => import('./terms-of-use/terms-of-use.module').then(m => m.TermsOfUseModule)
      }
    ],
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // change conponent scoll to top
      // preloadingStrategy: PreloadAllModules,
      // enableTracing: true, // use debug route path
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
