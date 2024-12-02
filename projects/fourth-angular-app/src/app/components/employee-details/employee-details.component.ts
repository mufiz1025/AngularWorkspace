import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../../services/employee.service';
import { employee } from '../../model/employee';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent implements OnInit{

  public employees = <employee[]>[];
  public errorMsg :any ;
  constructor ( private empservices : EmployeeService) {
   
  }
  ngOnInit(): void {
    this.empservices.getEmployees()
     .subscribe(data => this.employees = data,
      error => this.errorMsg = error
     );
  }

}
