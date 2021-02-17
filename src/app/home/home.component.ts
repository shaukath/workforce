import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  employeeData: any[] = [];

  constructor(private testService: TestserviceService, private router: Router) { }
  ngOnInit() {
    this.getData();
  }
  
  getData() {
    
    let empData: any = this.testService.getEmployeeData1();
    this.employeeData = empData;
    if(!empData){
    this.testService.getEmployeeData().subscribe((res: any) => {
      this.employeeData = res.data;
      this.testService.setEmployeeData(this.employeeData);
      this.employeeData = this.testService.getEmployeeData1();
     
      console.log(this.employeeData);
      
      console.log(res.data);
    });
  }

  
  
  }
  
  getEmployee(id: string) {
    this.router.navigate(['/employees'], { queryParams: { id: id } })
  }
}
