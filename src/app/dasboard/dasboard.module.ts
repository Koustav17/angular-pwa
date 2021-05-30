import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DasboardRoutingModule } from './dasboard-routing.module';
import { SharedModule } from '../module/shared/shared.module';
import { DasboardComponent } from './dasboard.component';


@NgModule({
  declarations: [
    DasboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DasboardRoutingModule
  ]
})
export class DasboardModule { }
