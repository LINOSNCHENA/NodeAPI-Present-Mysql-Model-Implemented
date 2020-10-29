import { Component, OnInit } from '@angular/core';
import {Worker}  from '../model/worker';
import {Router}  from '@angular/router';
import {Service4allService}  from '../services/Service4all.service';
import { BkgserviceService } from '../services/bkgservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']  })
 
export class AllEmployeesComponent implements OnInit {
  title: string;
  rows: Worker[] = [];

  p: number = 1;
  limit: number = 2;
  total: number;
  finalresults: Object;

  msgs : any;
  deletemsg : any;
  btnsubmit = true;
  btnupdate = false;

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    town: new FormControl(''),
    hotel: new FormControl(''),
    isactive: new FormControl(''),
    createdat: new FormControl('')
  });
  private workers:Worker[];
  constructor(private _userService:Service4allService, private _router:Router,
    private service: BkgserviceService) { }

ngOnInit() {
    this._userService.getItems().subscribe(
      (workers)=>{ console.log(workers);   this.workers=workers;}
      ,(error)=>{ console.log(error);  }) // }

     // ngOnInit(){
        this.service.getData().subscribe(data => { 
          this.finalresults = data ;
        });
      }
    
      onsubmit()
      {
        this.service.insertData(this.profileForm.value).subscribe(data =>{
          this.msgs = data;
          this.ngOnInit();
        });
      }

// Double
saveOrUpdateItem(worker: Worker){  
     this._userService.setter(worker);
     this._router.navigate(['/enrolls']);   }

// remove worker
deleteItem(worker: Worker){
   this._userService.deleteItem(worker.id).subscribe(
     (data)=>{this.workers.splice(this.workers.indexOf(worker),1);}
         ,(error)=>{console.log(error);});  
    
      }

 
        
// new worker
newItem(){
   let worker = new Worker();
    this._userService.setter(worker);
     this._router.navigate(['/enrolls']);   }


     ///////////////////////////////////new staff


     deletefnc(id: string)
     {
         this.service.deleteData(id).subscribe(() => { 
         this.deletemsg = "1 Record Deleted" ;
         this.ngOnInit();
       });
     }
   
     editData(id: string)
     {
         this.service.editValue(id).subscribe(data => { 
         this.profileForm.patchValue(data[0]);
         this.ngOnInit();
         this.btnsubmit = false ;
         this.btnupdate = true;
       });
     }
     
     onUpdate(id: string)
     {
       this.service.updateData(id,this.profileForm.value ).subscribe(data =>{
         this.msgs = data;
         this.ngOnInit();
         this.profileForm.reset();
           });
     }
   
}
