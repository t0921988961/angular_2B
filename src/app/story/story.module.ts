import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StoryComponent } from './story.component';
import { SharedTranslateModule } from '../sharedModule/shared-translate/shared-translate.module';


@NgModule({
  declarations: [StoryComponent],
  imports: [
    CommonModule,
    StoryRoutingModule,
    SharedTranslateModule
  ]
})
export class StoryModule { }
