import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { HomeComponent } from "./components/home/home.component";
import { DriverListComponent } from "./components/driver/driver-list/driver-list.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { DriverCreateComponent } from "./components/driver/driver-create/driver-create.component";
import { DriverUpdateComponent } from "./components/driver/driver-update/driver-update.component";
import { DriverDeleteComponent } from "./components/driver/driver-delete/driver-delete.component";
import { EngineerListComponent } from "./components/engineer/engineer-list/engineer-list.component";
import { EngineerCreateComponent } from "./components/engineer/engineer-create/engineer-create.component";
import { EngineerUpdateComponent } from "./components/engineer/engineer-update/engineer-update.component";
import { EngineerDeleteComponent } from "./components/engineer/engineer-delete/engineer-delete.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },
      { path: 'driver', component: DriverListComponent },
      { path: 'driver/create', component: DriverCreateComponent },
      { path: 'driver/update/:id', component: DriverUpdateComponent },
      { path: 'driver/delete/:id', component: DriverDeleteComponent },

      { path: 'engineer', component: EngineerListComponent },
      { path: 'engineer/create', component: EngineerCreateComponent },
      { path: 'engineer/update/:id', component: EngineerUpdateComponent },
      { path: 'engineer/delete/:id', component: EngineerDeleteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
