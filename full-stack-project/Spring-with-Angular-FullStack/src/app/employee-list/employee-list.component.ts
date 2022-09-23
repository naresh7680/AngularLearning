import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    // this.employees = [{
    //   "id": 1,
    //   "firstName": "naresh",
    //   "lastName": "reddy",
    //   "emailId": "naresh@gmail.com"
    // },
    // {
    //   "id": 2,
    //   "firstName": "Stepan",
    //   "lastName": "Kriv",
    //   "emailId": "Stepan@gmail.com"
    // },
    // {
    //   "id": 3,
    //   "firstName": "Kamila",
    //   "lastName": "Atha",
    //   "emailId": "kamila@gmail.com"
    // },
    // {
    //   "id": 4,
    //   "firstName": "Akash",
    //   "lastName": "Sharma",
    //   "emailId": "Akash@gmail.com"
    // },
    // {
    //   "id": 5,
    //   "firstName": "Narsingh",
    //   "lastName": "sahu",
    //   "emailId": "narsingh@gmail.com"
    // }];

    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }

  employeeDetails(id: number) {
    this.router.navigate(['employee-details', id]);
  }
}
