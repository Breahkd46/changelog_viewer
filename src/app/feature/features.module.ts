import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitHistoryModule } from './commit-history/commit-history.module';
import { CommitFormModule } from './commit-form/commit-form.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    CommitHistoryModule,
    ShareModule,
    CommitFormModule,
  ],
  exports: [
    CommitHistoryModule,
    CommitFormModule,
  ]
})
export class FeatureModule {}
