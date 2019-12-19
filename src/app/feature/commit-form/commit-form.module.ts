import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitFormComponent } from './components/commit-form/commit-form.component';
import { ShareModule } from '../../share/share.module';

@NgModule({
  declarations: [CommitFormComponent],
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports: [CommitFormComponent]
})
export class CommitFormModule { }
