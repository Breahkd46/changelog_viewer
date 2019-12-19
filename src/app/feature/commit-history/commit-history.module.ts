import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CommitTableComponent } from './component/commit-table/commit-table.component';
import { CommitItemComponent } from './component/commit-item/commit-item.component';

import { ShareModule } from '../../share/share.module';

import { CommitService } from './services/commit.service';


@NgModule({
  declarations: [CommitTableComponent, CommitItemComponent],
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports : [
    CommitTableComponent,
  ]
})
export class CommitHistoryModule { }
