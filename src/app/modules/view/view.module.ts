import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { GitInfoComponent } from './git-info/git-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DateComponent, GitInfoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DateComponent,
    GitInfoComponent
  ]
})
export class ViewModule { }
