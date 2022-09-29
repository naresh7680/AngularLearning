import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.updateEmployee(this.id, this.employee);
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employee']);
  }

  onSubmit() {
    console.log(this.employee);
    this.saveEmployee();
    this.updateEmployee(this.id, this.employee);
    this.router.navigate(['/employee-list']);
  }

  updateEmployee(id: number, employee: Employee) {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data => {
      return data = data;
      // this.goToEmployeeList();
    });
  }

}
