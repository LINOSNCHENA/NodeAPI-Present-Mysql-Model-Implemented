import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { OneEmployeeComponent } from './one-employee/one-employee.component';
import {RouterModule ,Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BkgserviceService } from './services/bkgservice.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Service4allService } from './services/Service4all.service';
import { HttpErrorHandler } from './services/errorManager';
import { MessageService } from './services/message';

const appRoutes :Routes = [
  {path : 'enrolls',component: OneEmployeeComponent },
  {path : '',component:AllEmployeesComponent},
];


@NgModule({
  declarations: [
    AppComponent,    AllEmployeesComponent,    OneEmployeeComponent
  ],
  imports: [
    BrowserModule, HttpModule,    AppRoutingModule, RouterModule.forRoot(appRoutes), FormsModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule,
  ],
  providers: [BkgserviceService,Service4allService,
    MessageService,
    HttpErrorHandler
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
