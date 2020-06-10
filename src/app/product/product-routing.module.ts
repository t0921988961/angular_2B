import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Partpro350XBCComponent } from './Binder_Jetting/partpro350-x-bc/partpro350-x-bc.component';
import { Partpro120XPComponent } from './DLP/partpro120-x-p/partpro120-x-p.component';
import { Castpro100XPComponent } from './DLP/castpro100-x-p/castpro100-x-p.component';
import { Partpro200XTCSComponent } from './Color_fff/partpro200-x-tcs/partpro200-x-tcs.component';
import { Partpro100XPComponent } from './DLP/partpro100-x-p/partpro100-x-p.component';
import { Partpro300XTComponent } from './FFF/partpro300-x-t/partpro300-x-t.component';
import { Mfgpro230XSComponent } from './SLS/mfgpro230-x-s/mfgpro230-x-s.component';
import { Partpro150XpComponent } from './SL/partpro150-xp/partpro150-xp.component';
import { Eeezcure180Component } from './UV_Curing/eeezcure180/eeezcure180.component';
import { Multicure180Component } from './UV_Curing/multicure180/multicure180.component';


const routes: Routes = [
  // Binder_Jetting
  {
    path: 'Binder_Jetting/PartPro350_xBC', component: Partpro350XBCComponent,
    data: {
      meta: {
        title: 'partpro350.title',
        description: 'partpro350.description'
      }
    }
  },
  // Color_fff
  {
    path: 'Color_fff/PartPro200_xTCS', component: Partpro200XTCSComponent,
    data: {
      meta: {
        title: 'partpro200xTCS.title',
        description: 'partpro200xTCS.description'
      }
    }
  },
  // DLP
  {
    path: 'DLP/CastPro100_xP', component: Castpro100XPComponent,
    data: {
      meta: {
        title: 'castpro100.title',
        description: 'castpro100.description'
      }
    }
  },
  {
    path: 'DLP/PartPro120_xP', component: Partpro120XPComponent,
    data: {
      meta: {
        title: 'partpro120.title',
        description: 'partpro120.description'
      }
    }
  },
  {
    path: 'DLP/PartPro100_xP', component: Partpro100XPComponent,
    data: {
      meta: {
        title: 'partpro100.title',
        description: 'partpro100.description'
      }
    }
  },
  // FFF
  {
    path: 'FFF/PartPro300_xT', component: Partpro300XTComponent,
    data: {
      meta: {
        title: 'partpro300.title',
        description: 'partpro300.description'
      }
    }
  },
  // SLS
  {
    path: 'SLS/MfgPro230_xS', component: Mfgpro230XSComponent,
    data: {
      meta: {
        title: 'mfgpro.title',
        description: 'mfgpro.description'
      }
    }
  },
  // SL
  {
    path: 'SL/partPro150_xp', component: Partpro150XpComponent,
    data: {
      meta: {
        title: 'partpro150.title',
        description: 'partpro150.description'
      }
    }
  },
  // UV_Curing
  {
    path: 'UV_Curing/EeezCure180', component: Eeezcure180Component,
    data: {
      meta: {
        title: 'eeezCure180.title',
        description: 'eeezCure180.description'
      }
    }
  },
  {
    path: 'UV_Curing/MultiCure180', component: Multicure180Component,
    data: {
      meta: {
        title: 'multicure180.title',
        description: 'multicure180.description'
      }
    }
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
