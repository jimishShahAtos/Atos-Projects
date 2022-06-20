import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { BannerNavBarComponent } from './banner-nav-bar/banner-nav-bar.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    UsersComponent,
    BannerNavBarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
