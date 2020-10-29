import { Injectable } from '@angular/core';
import { Http ,Response ,Headers, RequestOptions } from '@angular/http';
import{ Observable }   from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Worker} from '../model/worker'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Service4allService {
  private url1:string='http://localhost:8081/full';
  private headers = new Headers ({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers:this.headers});      // Data type Server
  private worker:Worker;
  constructor(private _http : Http ) { }

// http://localhost/8081/full/accounts                             //  GET+POST+DELETE(3)
getItems() {
    return  this._http.get(this.url1+'/accounts',this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorPost);  }
addItem(worker:Worker){
    return this._http.post(this.url1+'/accounts',JSON.stringify(worker),  this.options)
     .map((response:Response)=>response.json())
    .catch(this.errorPost);}
deleteItems(id:Number){
  return this._http.delete(this.url1+'/accounts/'+id,this.options)
  .map((response:Response)=>response.json())
  .catch(this.errorPost);}

// http://localhost/8081/full/accounts/:id                          //  GET/PUT/DELETE/ERROR(4)
getItem(id:Number){
    return this._http.get(this.url1+'/accounts/'+id,this.options)
     .map((response:Response)=>response.json())
     .catch(this.errorPost);  }
saveOrUpdateItem(worker:Worker) {
      return this._http.put(this.url1+'/accounts',JSON.stringify(worker),  this.options)
      .map((response:Response)=>response.json())
      .catch(this.errorPost);    }
deleteItem(id:Number){
    return this._http.delete(this.url1+'/accounts/'+id,this.options)
    .map((response:Response)=>response.json())
    .catch(this.errorPost);  }

errorPost(error:Response) {  
      return Observable.throw(error||"SERVER ERROR");  }

setter(worker:Worker)         {   this.worker=worker;  }
getter()                      {   return this.worker;  }
}
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
