import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminxComponent } from './customers/adminx.component';
import { DevicexComponent } from './products/devicex.component';

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
