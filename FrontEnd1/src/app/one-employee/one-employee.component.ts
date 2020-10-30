import { Component, OnInit } from '@angular/core';
import { Worker } from '../model/worker';
import { Router } from '@angular/router';
import { BkgserviceService } from '../services/bkgservice.service';
import { AdmserviceService } from '../services/admservice.service';

@Component({
  selector: 'app-one-employee',
  templateUrl: './one-employee.component.html',
  styleUrls: ['./one-employee.component.css']
})
export class OneEmployeeComponent implements OnInit {

  private worker: Worker;
  constructor(
    private service: BkgserviceService,
    private _admsource: AdmserviceService, private _routsource: Router) { }
  ngOnInit() {
    this.worker = this._admsource.getter();
  }

  completeForm() {
    console.log(this.worker);
    // test for worker presence
    if (this.worker.id == undefined) {
      this._admsource.addItem(this.worker).subscribe((worker) => {
        console.log(worker);
        this._routsource.navigate(['/']);
      }, (error) => { console.log(error); });
    }
    else {
      // Both update and create worker
      this._admsource.saveOrUpdateItem(this.worker).subscribe((worker) => {
        console.log(worker);
        this._routsource.navigate(['/']);
      }, (error) => { console.log(error); });
    }
  }
}