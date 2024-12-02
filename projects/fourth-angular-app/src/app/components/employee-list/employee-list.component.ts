import { catchError, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { employee } from '../../model/employee';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {

  public errorMSG: any;
  public employees = <employee[]>[];

  constructor( private empServices : EmployeeService) {
  }

  ngOnInit(): void {
    this.empServices.getEmployees()
    .subscribe(data => this.employees = data ,
       error => this.errorMSG = error
    );
        
  }

}
