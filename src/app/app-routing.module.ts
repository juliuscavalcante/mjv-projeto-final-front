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
import { MechanicListComponent } from "./components/mechanic/mechanic-list/mechanic-list.component";
import { MechanicCreateComponent } from "./components/mechanic/mechanic-create/mechanic-create.component";
import { MechanicUpdateComponent } from "./components/mechanic/mechanic-update/mechanic-update.component";
import { MechanicDeleteComponent } from "./components/mechanic/mechanic-delete/mechanic-delete.component";
import { ManagerListComponent } from "./components/manager/manager-list/manager-list.component";
import { ManagerCreateComponent } from "./components/manager/manager-create/manager-create.component";
import { ManagerUpdateComponent } from "./components/manager/manager-update/manager-update.component";
import { ManagerDeleteComponent } from "./components/manager/manager-delete/manager-delete.component";

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

      { path: 'mechanic', component: MechanicListComponent },
      { path: 'mechanic/create', component: MechanicCreateComponent },
      { path: 'mechanic/update/:id', component: MechanicUpdateComponent },
      { path: 'mechanic/delete/:id', component: MechanicDeleteComponent },

      { path: 'manager', component: ManagerListComponent },
      { path: 'manager/create', component: ManagerCreateComponent },
      { path: 'manager/update/:id', component: ManagerUpdateComponent },
      { path: 'manager/delete/:id', component: ManagerDeleteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
