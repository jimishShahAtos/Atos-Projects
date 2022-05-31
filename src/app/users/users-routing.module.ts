import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/users/dashboard/dashboard.component';
import { AuthGuard } from './components/users/login/authguard';
import { LoginComponent } from './components/users/login/login.component';

const routes: Routes = [
 {
  path : "",
  redirectTo:"DashboardComponent",
  pathMatch: "full"
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule { }
