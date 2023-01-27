import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModule } from 'src/app/model/employee/employee.module';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';






@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  id: string = '';
  employee: EmployeeModule = {
    id: '',
    firstname: '',
    lastname: '',
    salary: 0,
    state: '',
    country: ''
  };

  constructor(private route: ActivatedRoute, private empService: EmployeeServiceService, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.empService.getEmployee(this.id).subscribe(response => {
        this.employee = response;
      })

    });
  }

  ngOnInit(): void {

  }

  deleteEmployee() {
    this.empService.deleteEmployee(this.id).subscribe(response => {
      alert("employee has been deleted");
      this.router.navigate(['/employees'])
    })
  }


  updateEmployee(emp: EmployeeModule) {
    emp.id = this.employee.id;
    this.empService.updateEmployee(emp).subscribe(response => {
      alert("Employee has been updated");
      this.router.navigate(['./employees']);
    })
  }
}
