import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { LoginComponent } from './components/users/login/login.component';

@NgModule({
  declarations: [
    UsersComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
