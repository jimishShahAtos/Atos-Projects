import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './users/components/users/dashboard/dashboard.component';
import { LoginComponent } from './users/components/users/login/login.component';

const routes: Routes = [
  {
    path : "",
    redirectTo:"DashboardComponent",
    pathMatch: "full"
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
