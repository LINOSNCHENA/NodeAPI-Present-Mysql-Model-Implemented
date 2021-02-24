import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminxComponent } from './customers/adminx.component';
import { DevicexComponent } from './products/devicex.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpErrorHandler } from './services/errorManager';
import { MessageService } from './services/message';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AdminsService } from './services/admins.service';
import { ProductService } from './services/product.service';

const appRoutes: Routes = [
  { path: 'devicex', component: DevicexComponent },
  { path: '', component: AdminxComponent },
];

@NgModule({
  declarations: [AppComponent, AdminxComponent, DevicexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProductService, MessageService, AdminsService, HttpErrorHandler],
  bootstrap: [AppComponent],
})
export class AppModule {}
