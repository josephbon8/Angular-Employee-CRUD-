import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

  { path: '', component: EmployeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'employee/:id', component: EmployeeComponent },
  { path: '**', component: NotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
