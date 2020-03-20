import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { EmployeeSrvService } from '../Shared/employee-srv.service';
import { Employee } from '../Entities/employee';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empSrv: EmployeeSrvService, private tostrSrv: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(employeeForm: NgForm) {
    if(employeeForm.value.EmployeeID == -1)
    {
      this.empSrv.postEmployee(employeeForm.value).subscribe(data => {
        this.resetForm(employeeForm);
        this.empSrv.GetEmployeeList().subscribe(x => this.empSrv.EmpList = x);
        this.tostrSrv.success("The Employee Added Successfully","CRUD Application",);
      });
    }
    else{
      this.empSrv.putEmployee(employeeForm.value.EmployeeID, employeeForm.value).subscribe(data => {
        this.resetForm(employeeForm);
        this.empSrv.GetEmployeeList().subscribe(x => this.empSrv.EmpList = x);
        this.tostrSrv.warning("The Employee Updated Successfully","CRUD Application");
      });
    }
  }

  resetForm(emloyeeForm: NgForm)
  {
    emloyeeForm.reset();
    this.empSrv.SelectedEmployee = new Employee();    
  }
}
