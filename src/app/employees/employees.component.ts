import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
 
  employee:any = {};
  id: string = '';
  empDetails:any= []


  constructor(private testService: TestserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let empData:any = this.testService.getEmployeeData1();
    this.empDetails = empData;
    
   

  // //  this.getEmployeeById();
  //  this.route.queryParams.subscribe(params=>{
  //    console.log(params.id);
  //    this.id = params.id;
  //    this.getEmployeeById(this.id);
  //  
  }

  getEmployeeById(id: string) {
    this.testService.getEmployeeById(id).subscribe((res: any) => {
      this.employee = res.data;
      console.log(res.data);
    });

  }
}

