import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ContactModule } from '../contact/contact.module';
import { SupportComponent } from '../support/support.component';



@NgModule({
  declarations: [HeadComponent, FootComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContactModule,
    SupportComponent
  ],
  exports: [HeadComponent, FootComponent]
})
export class LayoutModule { }
