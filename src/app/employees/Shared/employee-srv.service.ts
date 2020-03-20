import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod,Headers } from '@angular/http'
import { Employee } from '../Entities/employee';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class EmployeeSrvService {

  EmpList: Employee[];
  SelectedEmployee:Employee= new Employee();
  APIURL:string = "http://localhost/CRUDAPI/api/Employees/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  constructor(private _http: HttpClient) { }


  GetEmployeeList():Observable<Employee[]> {
    return this._http.get<Employee[]>(this.APIURL);
  }


  GetSelectedEmployee(id): Observable<Employee> {
    return this._http.get<Employee>(this.APIURL + id);
  }

  postEmployee(emp: Employee):Observable<Employee>
  {
    var body = JSON.stringify(emp);
    // var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    // var requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
    return this._http.post<Employee>(this.APIURL, body, this.httpOptions);
  }

  putEmployee(id: number, emp: Employee):Observable<Employee>
  {
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this._http.put<Employee>(this.APIURL + id, body,this.httpOptions);
  }

  deleteEmployee(empID: number):Observable<Employee> {
    return this._http.delete<Employee>(this.APIURL + empID);      
  }
}
