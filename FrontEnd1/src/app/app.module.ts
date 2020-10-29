import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import {RouterModule ,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

const appRoutes :Routes = [
  {path : 'enrolls',component: OneEmployeeComponent },
  {path : '',component:AllEmployeesComponent},
];


@NgModule({
  declarations: [
    AppComponent,    AllEmployeesComponent,    OneEmployeeComponent
  ],
  imports: [
    BrowserModule, HttpModule,    AppRoutingModule, RouterModule.forRoot(appRoutes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
