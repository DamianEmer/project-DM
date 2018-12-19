import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  someNumber: any;
  tab: any;

  public dataNumberShared = new BehaviorSubject<any>([]);
  dataNumberShared$ = this.dataNumberShared.asObservable();

  public dataTabsShared = new BehaviorSubject<any>([]);
  dataTabsShared$ = this.dataTabsShared.asObservable();

  private currentNumber = new Subject<number>();

  currentNumber$ = this.currentNumber.asObservable();

  constructor() { }

  // Metodo encargado de compartir informacion
  public setDataShared(someNumber: any){
    this.someNumber = someNumber;
    this.dataNumberShared.next(someNumber);
  }

  public setDataTabsShared(tab: any){
    this.tab = tab;
    this.dataTabsShared.next(tab);
  }

  public setCurrentNumber(n: number) {
    this.currentNumber.next(n);
  }
}
