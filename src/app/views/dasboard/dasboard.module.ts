import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerModule } from '../container/container/container.module';
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
    ContainerModule,
    DasboardRoutingModule
  ]
})
export class DasboardModule { }
