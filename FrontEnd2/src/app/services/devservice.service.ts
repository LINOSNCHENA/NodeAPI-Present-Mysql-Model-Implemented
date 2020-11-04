import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HandleError, HttpErrorHandler } from './errorManager';

@Injectable({
  providedIn: 'root'
})
export class DevserviceService {

  private url = `${environment.url1}`;
  private handleError: HandleError;
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  redirectUrl: string;
  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handleError = this.httpErrorHandler.createHandleError('AdminzService')
  }

  insertData(fields: any) {                       // 1
    return this.http.post(this.url + "/binsertData", fields)
      .pipe(catchError(this.handleError('Insert Error x1', null)))
  }

  getData() {                                     // 2
    return this.http.get(this.url + "/bgetdata");
  }

  editValue(id: string) {                         // 3A
    return this.http.get(this.url + "/beditData/" + id);
  }

  updateData(id: string, value: any) {            // 3B
    return this.http.post(this.url + "/bupdateData/" + id, value);
  }

  deleteData(id: string) {                        // 4
    return this.http.get(this.url + "/bdeletedata/" + id);
  }
}
