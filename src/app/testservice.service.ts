import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor(private http: HttpClient) { }

  setEmployeeData(employeeData: any) {
    sessionStorage.setItem('emp', JSON.stringify(employeeData))
  }



  getEmployeeData1() {
    // return this.http.get("https://reqres.in/api/users?page=1");
    const empDetails: any = sessionStorage.getItem('emp');
    return JSON.parse(empDetails);

  }

  getEmployeeData() {
    return this.http.get("https://reqres.in/api/users?page=1");


  }
  getEmployeeById(id: string) {
    const url = "https://reqres.in/api/users/" + id
    return this.http.get(url);
  }

}  
