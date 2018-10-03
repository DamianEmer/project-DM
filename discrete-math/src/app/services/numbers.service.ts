import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  octals: any [] = [
    { f0: 0, f1: 1, f2: 2, f3: 3, f4: 4, f5: 5, f6: 6, f7: 7},
    { f0: 10, f1: 11, f2: 12, f3: 13, f4: 14, f5: 15, f6: 16, f7: 17},
    { f0: 20, f1: 21, f2: 22, f3: 23, f4: 24, f5: 25, f6: 26, f7: 27},
    { f0: 30, f1: 31, f2: 32, f3: 33, f4: 34, f5: 35, f6: 36, f7: 37},
    { f0: 40, f1: 41, f2: 42, f3: 43, f4: 44, f5: 45, f6: 46, f7: 47},
    { f0: 50, f1: 51, f2: 52, f3: 53, f4: 54, f5: 55, f6: 56, f7: 57},
    { f0: 60, f1: 61, f2: 62, f3: 63, f4: 64, f5: 65, f6: 66, f7: 67},
    { f0: 70, f1: 71, f2: 72, f3: 73, f4: 74, f5: 75, f6: 76, f7: 77}
  ]

  constructor() { }

  getOctals () {
    return this.octals;
  }
}
