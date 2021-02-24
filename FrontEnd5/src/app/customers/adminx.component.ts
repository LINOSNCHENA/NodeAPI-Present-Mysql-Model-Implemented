import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Worker } from '../model/worker';
import { AdminsService } from '../services/admins.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-adminx',
  templateUrl: './adminx.component.html',
  styleUrls: ['./adminx.component.css']
})
export class AdminxComponent implements OnInit {
  title!: string;
  rows: Worker[] = [];

  p: number = 1;
  limit: number = 2;
  total!: number;
  finalresults: any;//Worker[];//Object;

  msgs: any;
  deletemsg: any;
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
  //private workers: Worker[];
  //private workers: Worker[];
  workers!: Worker[];
  constructor(
    private _router: Router,
    private _admservice: AdminsService,
    private service: ProductService    
    ) { }

  ngOnInit() {
    this._admservice.getItems().subscribe(
      (workers) => { console.log(workers); this.workers = workers; }
      , (error) => { console.log(error); })
      //////////////////////////////////////
    this.service.getData().subscribe(data => {
      this.finalresults = data;}
        
      
      )
  }

  onsubmit() {
    this.service.insertData(this.profileForm.value).subscribe(data => {
      this.msgs = data;
      this.ngOnInit();
    });
  }
////////////////////////////////////// SECOND PART //////////////////
  // Double
  saveOrUpdateItem(worker: Worker) {
    this._admservice.setter(worker);
    this._router.navigate(['/devicex']);
  }
  // remove worker
  deleteItem(worker: Worker) {
    this._admservice.deleteItem(worker.id).subscribe(
      (data) => { this.workers.splice(this.workers.indexOf(worker), 1); }
      , (error) => { console.log(error); });
  }
// add worker
  newItem() {
    let worker = new Worker();
    this._admservice.setter(worker);
    this._router.navigate(['/devicex']);
  }

  ///////////////////////////////////new staff
  deletefnc(id: string) {
    this.service.deleteData(id).subscribe(() => {
      this.deletemsg = "1 Record Deleted";
      this.ngOnInit();
    });
  }

  editData(id: string) {
    this.service.editValue(id).subscribe(data => {
      this.profileForm.patchValue(data); //[]
      this.ngOnInit();
      this.btnsubmit = false;
      this.btnupdate = true;
    });
  }

  onUpdate(id: string) {
    this.service.updateData(id, this.profileForm.value).subscribe(data => {
      this.msgs = data;
      this.ngOnInit();
      this.profileForm.reset();
    });
  }

}
