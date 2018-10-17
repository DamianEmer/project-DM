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

  hexadecimals: any [] = [
    { f0: 0, f1: 1, f2: 2, f3: 3, f4: 4, f5: 5, f6: 6, f7: 7, f8:8, f9:9, f10:'A', f11:'B', f12:'C', f13:'D', f14:'E', f15:'F' },
    { f0: 10, f1: 11, f2: 12, f3: 13, f4: 14, f5: 15, f6: 16, f7: 17, f8:18, f9:19, f10:'1A', f11:'1B', f12:'1C', f13:'1D', f14:'1E', f15:'1F' },
    { f0: 20, f1: 21, f2: 22, f3: 23, f4: 24, f5: 25, f6: 26, f7: 27, f8:28, f9:29, f10:'2A', f11:'2B', f12:'2C', f13:'2D', f14:'2E', f15:'2F' },
    { f0: 30, f1: 31, f2: 32, f3: 33, f4: 34, f5: 35, f6: 36, f7: 37, f8:38, f9:39, f10:'3A', f11:'3B', f12:'3C', f13:'3D', f14:'3E', f15:'3F' },
    { f0: 40, f1: 41, f2: 42, f3: 43, f4: 44, f5: 45, f6: 46, f7: 47, f8:48, f9:49, f10:'4A', f11:'4B', f12:'4C', f13:'4D', f14:'4E', f15:'4F' },
    { f0: 50, f1: 51, f2: 52, f3: 53, f4: 54, f5: 55, f6: 56, f7: 57, f8:58, f9:59, f10:'5A', f11:'5B', f12:'5C', f13:'5D', f14:'5E', f15:'5F' },
    { f0: 60, f1: 61, f2: 62, f3: 63, f4: 64, f5: 65, f6: 66, f7: 67, f8:68, f9:69, f10:'6A', f11:'6B', f12:'6C', f13:'6D', f14:'6E', f15:'6F' },
    { f0: 70, f1: 71, f2: 72, f3: 73, f4: 74, f5: 75, f6: 76, f7: 77, f8:78, f9:79, f10:'7A', f11:'7B', f12:'7C', f13:'7D', f14:'7E', f15:'7F' },
    { f0: 80, f1: 81, f2: 82, f3: 83, f4: 84, f5: 85, f6: 86, f7: 87, f8:88, f9:89, f10:'8A', f11:'8B', f12:'8C', f13:'8D', f14:'8E', f15:'8F' },
    { f0: 90, f1: 91, f2: 92, f3: 93, f4: 94, f5: 95, f6: 96, f7: 97, f8:98, f9:99, f10:'9A', f11:'9B', f12:'9C', f13:'9D', f14:'9E', f15:'9F' },
    { f0: 'A0', f1: 'A1', f2: 'A2', f3: 'A3', f4: 'A4', f5: 'A5', f6: 'A6', f7: 'A7', f8: 'A8', f9: 'A9', f10:'AA', f11:'AB', f12:'AC', f13:'AD', f14:'AE', f15:'AF' },
    { f0: 'B0', f1: 'B1', f2: 'B2', f3: 'B3', f4: 'B4', f5: 'B5', f6: 'B6', f7: 'B7', f8: 'B8', f9: 'B9', f10:'BA', f11:'BB', f12:'BC', f13:'BD', f14:'BE', f15:'BF' },
    { f0: 'C0', f1: 'C1', f2: 'C2', f3: 'C3', f4: 'C4', f5: 'C5', f6: 'C6', f7: 'C7', f8: 'C8', f9: 'C9', f10:'CA', f11:'CB', f12:'CC', f13:'CD', f14:'CE', f15:'CF' },
    { f0: 'D0', f1: 'D1', f2: 'D2', f3: 'D3', f4: 'D4', f5: 'D5', f6: 'D6', f7: 'D7', f8: 'D8', f9: 'D9', f10:'DA', f11:'DB', f12:'DC', f13:'DD', f14:'DE', f15:'DF' },
    { f0: 'E0', f1: 'E1', f2: 'E2', f3: 'E3', f4: 'E4', f5: 'E5', f6: 'E6', f7: 'E7', f8: 'E8', f9: 'E9', f10:'EA', f11:'EB', f12:'EC', f13:'ED', f14:'EE', f15:'EF' },
  ]

  constructor() { }

  getOctals ():any {
    return this.octals;
  }

  getHexadecimal(): any {
    return this.hexadecimals;
  }

  // Algortimo de conversion Octal-Decimal
  octalToDecimal( value: number): string {
    console.log("convertir "+typeof value);
    let dec: number = 0;
    let j:number = 0;
    var num;
    //console.log(`Digitos de ${value} : ${value.toString().length}`);
    for ( let i = value.toString().length-1 ; i >= 0; i-- ){
      num = parseInt( value.toString().charAt(i) );
      dec += num * Math.pow(8, j);
      //console.log(`num: ${num} - dec: ${dec} - j: ${j}`);
      j++;     
    }
    console.log(`Octal: ${value} - Decimal: ${dec.toString()}`);
    return `Octal: ${value} - Decimal: ${dec.toString()}`;
  }

  // Algoritmo de conversion hexadecimal a decimal
  hexaToDecimal( value: number){
    let dec: number = 0;
    let j:number = 0;
    var num;
    for ( let i = value.toString().length-1 ; i >= 0; i-- ){
      num = parseInt( value.toString().charAt(i) );
      dec += num * Math.pow(16, j);
      j++;     
    }
  }
}
