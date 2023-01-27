import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateButtonComponent } from './components/update-button/update-button.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NotfoundComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    NavbarComponent,
    UpdateButtonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
