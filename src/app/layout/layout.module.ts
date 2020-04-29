import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeadComponent, FootComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeadComponent, FootComponent]
})
export class LayoutModule { }
