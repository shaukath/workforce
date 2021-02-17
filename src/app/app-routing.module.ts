import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
 },
 {
  path: 'addemployee',
  component: AddemployeeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
