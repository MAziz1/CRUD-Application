import { Component, OnInit } from '@angular/core';
import { EmployeeSrvService } from './Shared/employee-srv.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private empSrv:EmployeeSrvService) {

   }

  ngOnInit() {
    
  }

}
