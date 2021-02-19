import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminxComponent } from './adminx/adminx.component';
import { DevicexComponent } from './devicex/devicex.component';

const routesx: Routes = [];
const routes: Routes = [
  { path: 'admin', component: AdminxComponent },
  { path: 'device', component: DevicexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
