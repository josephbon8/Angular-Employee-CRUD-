import { Component, OnInit } from '@angular/core';
import { EmployeeModule } from 'src/app/model/employee/employee.module';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: EmployeeModule[] = [];

  constructor(private empService: EmployeeServiceService) {

  }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(response => {
      this.employees = response;
    });
  }

  deleteEmployee(id: string) {
    this.empService.deleteEmployee(id).subscribe(res => {
      console.log(res);
      alert("employee has been deleted");
      location.reload();
    })
  }
}
