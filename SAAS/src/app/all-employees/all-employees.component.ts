import { Component, OnInit } from '@angular/core';
import {Worker}  from '../model/worker';
import {Router}  from '@angular/router';
import {Service4allService}  from '../services/Service4all.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']  })
 
export class AllEmployeesComponent implements OnInit {
  private workers:Worker[];
  constructor(private _userService:Service4allService, private _router:Router) { }

ngOnInit() {
    this._userService.getItems().subscribe(
      (workers)=>{ console.log(workers);   this.workers=workers;}
      ,(error)=>{ console.log(error);  })  }

// Double
saveOrUpdateItem(worker){  
     this._userService.setter(worker);
     this._router.navigate(['/enrolls']);   }

// remove worker
deleteItem(worker){
  this._userService.deleteItem(worker.id).subscribe(
    (data)=>{this.workers.splice(this.workers.indexOf(worker),1);}
        ,(error)=>{console.log(error);});   }
        
// new worker
newItem(){
   let worker = new Worker();
    this._userService.setter(worker);
     this._router.navigate(['/enrolls']);   }
}
