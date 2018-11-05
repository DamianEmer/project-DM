import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  _somedata: any;

  public _dataShared = new BehaviorSubject<any>([]);
  dataShared$ = this._dataShared.asObservable();

  constructor() { }

  // Metodo encargado de compartir informacion
  public setDataShared(somedata: any){
    this._somedata = somedata;
    this._dataShared.next(somedata);
  }
}
