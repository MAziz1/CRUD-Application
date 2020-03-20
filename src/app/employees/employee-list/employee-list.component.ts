import { Component, OnInit } from '@angular/core';
import { EmployeeSrvService } from '../Shared/employee-srv.service';
import { Employee } from '../Entities/employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private empSrv:EmployeeSrvService,private tostrSrv: ToastrService) { }

  ngOnInit() {
    this.empSrv.GetEmployeeList().subscribe(x=>{ this.empSrv.EmpList = x });
  }

  showForEdit(emp:Employee)
  {
    this.empSrv.GetSelectedEmployee(emp.EmployeeID).subscribe(x => { this.empSrv.SelectedEmployee = x });
  }

  onDelete(empID: number)
  {
    if(confirm("Are you sure you want to delete this employee?") == true)
    {
      this.empSrv.deleteEmployee(empID).subscribe(data=>{
        this.tostrSrv.error("The User Deleted Successfully","CRUD Application");
        this.empSrv.GetEmployeeList().subscribe(x => this.empSrv.EmpList = x);
      },error=>{
        alert(error);
      });
    }
  }
}
