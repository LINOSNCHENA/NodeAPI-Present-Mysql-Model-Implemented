import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminxComponent } from './adminx/adminx.component';
import { DevicexComponent } from './devicex/devicex.component';
import { AdmserviceService } from './services/admservice.service';
import { DevserviceService } from './services/devservice.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpErrorHandler } from './services/errorManager';
import { MessageService } from './services/message';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
  { path: 'devicex', component: DevicexComponent },
  { path: '', component: AdminxComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminxComponent,
    DevicexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , BrowserModule, HttpModule, AppRoutingModule,
    RouterModule.forRoot(appRoutes), FormsModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,],
  providers: [AdmserviceService, DevserviceService,
    MessageService, AdmserviceService,
    HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
