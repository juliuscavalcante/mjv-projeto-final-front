import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Forms Angular
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// HTTP requests
import { HttpClientModule } from '@angular/common/http';

// Imports Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DriverListComponent } from './components/driver/driver-list/driver-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from "ngx-toastr";
import { AuthInterceptorProvider } from "./interceptors/auth.interceptor";
import { DriverCreateComponent } from './components/driver/driver-create/driver-create.component';
import { NgxMaskModule } from "ngx-mask";
import { DriverUpdateComponent } from './components/driver/driver-update/driver-update.component';
import { DriverDeleteComponent } from './components/driver/driver-delete/driver-delete.component';
import { EngineerListComponent } from "./components/engineer/engineer-list/engineer-list.component";
import { EngineerCreateComponent } from "./components/engineer/engineer-create/engineer-create.component";
import { EngineerUpdateComponent } from "./components/engineer/engineer-update/engineer-update.component";
import { EngineerDeleteComponent } from "./components/engineer/engineer-delete/engineer-delete.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    DriverListComponent,
    LoginComponent,
    DriverCreateComponent,
    DriverUpdateComponent,
    DriverDeleteComponent,
    EngineerListComponent,
    EngineerCreateComponent,
    EngineerUpdateComponent,
    EngineerDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // HTTP requests
    HttpClientModule,
    // Angular Material
    MatFormFieldModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
