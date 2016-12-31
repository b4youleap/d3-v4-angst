import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Peril } from './peril';

@Injectable()
export class DataService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private perilsUrl = 'http://perilexpress.mybluemix.net/api/perils';
    // private perilsUrl = 'http://localhost:3000/api/perils'; // URL to local dev web api

  constructor(private _http: Http) { }

  getPerils() : Promise<Peril[]> {
    // console.log('in DataService...getPerils');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.perilsUrl,{}, options)
                .toPromise()
                .then(response => response.json() as Peril[])
                .catch(this.handleError);
    
  }

  getPeril(_id: string): Promise<Peril> {  
    // console.log('in DataService...getPeril');
    // console.log(_id);
    return this.getPerils()
      .then(perils => perils.find(peril => peril._id === _id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // TODO: Real error handling
    return Promise.reject(error.message || error);
  }

}