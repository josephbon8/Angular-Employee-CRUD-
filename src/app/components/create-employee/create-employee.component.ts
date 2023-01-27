import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { EmployeeModule } from 'src/app/model/employee/employee.module';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private empService: EmployeeServiceService, private router: Router) {

  }

  ngOnInit(): void {

  }

  createEmployee(employee: EmployeeModule) {
    this.empService.createEmployee(employee).subscribe(res => {
      console.log(res);
      alert("employee has been created");
      this.router.navigate(['/'])
    })
  }
}
