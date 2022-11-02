import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { DriverListComponent } from "./components/driver-list/driver-list.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'driver', component: DriverListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
