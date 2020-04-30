import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilamentRoutingModule } from './filament-routing.module';
import { FilamentComponent } from './filament.component';


@NgModule({
  declarations: [FilamentComponent],
  imports: [
    CommonModule,
    FilamentRoutingModule
  ]
})
export class FilamentModule { }
