import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModule } from '../feature/features.module';
import { ContainerComponent } from './containers/containers.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    FeatureModule,
  ],
  exports: [
    ContainerComponent
  ],
})
export class CoreModule { }
