import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  avatar: string = 'https://dummyimage.com/300x300/000/fff&text=user'
  empDetails: any[] = [];
  id: any;
  btnLabel = 'Add Employee';
  isAddBtn = true;

  constructor(
    private testService: TestserviceService,
    private route: ActivatedRoute,
    private router: Router
    ) { }


  ngOnInit(): void {
    this.get();
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.setEmployeeDataToForm();
  }

  get() {
    this.empDetails = this.testService.getEmployeeData1();
  }

  setEmployeeDataToForm() {
    const employee = this.empDetails.find(emp => emp.id == this.id);
    if (employee) {
      this.firstName = employee.first_name;
      this.lastName = employee.last_name;
      this.email = employee.email;
      this.avatar = employee.avatar;
      this.btnLabel = 'Update Employee';
      this.isAddBtn = false;
    }
  }

  onSubmit(addEmployeeForm: any) {
    const index = this.empDetails.findIndex(emp => emp.id == this.id);
    const employee = addEmployeeForm.value;
    employee.avatar = this.avatar;
    if (index > -1) {
      employee.id = this.id;
      employee.avatar = this.empDetails[index].avatar;
      this.empDetails.splice(index, 1, employee)
    } else {
      employee.id = this.empDetails.length + 1;
      this.empDetails.push(employee);
    }
    this.testService.setEmployeeData(this.empDetails);
    setTimeout(() => {
      this.router.navigateByUrl('');
    }, 2000)
  }

}



