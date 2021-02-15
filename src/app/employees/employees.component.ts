import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employee: any = {};
  id: string = '';
  employeeData:any = [];
  


  constructor(private testService: TestserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   
    //  this.getEmployeeById();
    this.route.queryParams.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
      this.getEmployeeById(this.id);

    });
  }

  getEmployeeById(id: string) {
    this.employeeData = this.testService.getEmployeeData1();
    console.log(this.employeeData);
   this.employee = this.employeeData.find((employee:any) => employee.id == id);
  //  this.employee = this.employeeData.find(function(employee:any) { return employee.id == id} );
       // this.testService.getEmployeeById(id).subscribe((res: any) => {
    //   this.employee = res.data;
    //   console.log(res.data);
    // });

  }
}

