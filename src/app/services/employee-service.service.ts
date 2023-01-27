import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModule } from '../model/employee/employee.module';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  url: string = "http://localhost:8093/api/employees"
  constructor(private http: HttpClient) {

  }

  getEmployees(): Observable<EmployeeModule[]> {
    return this.http.get<EmployeeModule[]>(this.url);
  }

  getEmployee(id: string): Observable<EmployeeModule> {
    return this.http.get<EmployeeModule>(this.url + '/' + id);
  }

  createEmployee(employee: EmployeeModule): Observable<EmployeeModule> {
    return this.http.post<EmployeeModule>(this.url, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete<EmployeeModule>(this.url + '/' + id);
  }

  updateEmployee(employee: EmployeeModule) {
    return this.http.put(this.url + '/' + employee.id, employee);
  }
}
