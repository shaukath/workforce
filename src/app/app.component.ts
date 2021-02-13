import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workforce';
  constructor(private testService: TestserviceService) { }
 
}
// ngOnInit(): void

//     let empData:any = this.testService.getEmployeeData();
//     this.empData = empData;
//   }

 