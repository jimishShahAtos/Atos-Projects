import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserFormsRoutingModule } from './user-forms-routing.module';
import { UserFormsComponent } from './components/user-forms/user-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserFormsComponent
  ],
  imports: [
    CommonModule,
    UserFormsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserFormsComponent
  ]
})
export class UserFormsModule { }
