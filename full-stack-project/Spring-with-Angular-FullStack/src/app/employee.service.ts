import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8094/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  // return all employee list from MySQL workbench
  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  // create new employee when you hit submit 
  createEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
