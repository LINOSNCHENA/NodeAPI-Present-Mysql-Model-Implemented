import { Component, OnInit } from '@angular/core';
import { Worker } from '../model/worker';
import { Router } from '@angular/router';
import { Service4allService } from '../services/Service4all.service';

@Component({
  selector: 'app-one-employee',
  templateUrl: './one-employee.component.html',
  styleUrls: ['./one-employee.component.css']
})
export class OneEmployeeComponent implements OnInit {
  private worker: Worker;
  constructor(private _userService: Service4allService, private _rotuer: Router) { }
  ngOnInit() { this.worker = this._userService.getter(); }

  completeForm() {
    console.log(this.worker);
    // test for worker presence
    if (this.worker.id == undefined) {
      this._userService.addItem(this.worker).subscribe((worker) => {
        console.log(worker);
        this._rotuer.navigate(['/']);
      }, (error) => { console.log(error); });
    }
    else {
      // Both update and create worker
      this._userService.saveOrUpdateItem(this.worker).subscribe((worker) => {
        console.log(worker);
        this._rotuer.navigate(['/']);
      }, (error) => { console.log(error); });
    }
  }
}