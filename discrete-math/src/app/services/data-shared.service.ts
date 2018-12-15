import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  _someNumber: any;
  _tab: any;

  public dataNumberShared = new BehaviorSubject<any>([]);
  dataNumberShared$ = this.dataNumberShared.asObservable();

  public dataTabsShared = new BehaviorSubject<any>([]);
  dataTabsShared$ = this.dataTabsShared.asObservable();

  constructor() { }

  // Metodo encargado de compartir informacion
  public setDataShared(someNumber: any){
    this._someNumber = someNumber;
    this.dataNumberShared.next(someNumber);
  }

  public setDataTabsShared(tab: any){
    this._tab = tab;
    this.dataTabsShared.next(tab);
  }
}
