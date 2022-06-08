import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/users/login/login.component';
import { RenderingEngineComponent } from './components/users/renderingEngine/renderingEngine.component';
import { DashboardComponent } from './components/users/dashboard/dashboard.component';


@NgModule({
  declarations: [
    UsersComponent,
    RenderingEngineComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  exports:[
    UsersComponent,
    RenderingEngineComponent,
    LoginComponent,
    DashboardComponent
  ]
})
export class UsersModule { }
