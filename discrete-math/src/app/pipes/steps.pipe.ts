import { Pipe, PipeTransform, ElementRef } from '@angular/core';
import { NumbersService } from '../services/numbers.service';

@Pipe({
  name: 'steps'
})
export class StepsPipe implements PipeTransform {

  constructor(private numberService: NumbersService,
    private elRef: ElementRef) {
    // console.log("Pipe generado ")
    this.elRef.nativeElement;
    console.log(this.elRef);
  }

  transform(value: any): any {
    console.log("value: ",value);
    // console.log(this.elRef.nativeElement.firstChild);
    let element = this.elRef.nativeElement.firstChild.firstChild;
    this.numberService.getSteps().map(data => {
      if (value === data.number) {
        //console.log(`${value} == ${data.number}`)
        element.style.background = 'red';
      }else {
        console.log('nada');
      }
    })
    return value;
  }

  // transform(value: any): any {
  //   //console.log("value: ",value);
  //   // console.log(this.elRef.nativeElement.firstChild);
  //   let elements = this.elRef.nativeElement.firstChild.children;
  //   //console.log(elements);
  //   this.numberService.getSteps().map(data => {
  //     if (value === data.number) {
  //       for (let i = 0; i < elements.length; i++) {

  //         console.log(elements[i],
  //           value.toString(),
  //           elements[i].firstChild);

  //         if (value.toString() == "10") {
  //           console.log("evalua ----> ", elements[i].firstChild.nodeValue);
  //           console.log(`${value.toString()} == ${elements[i].textContent}`)
  //           elements[i].style.background = 'red';
  //         }

  //         else {
  //           console.log("siguiente")
  //         }

  //       }
  //       //console.log(`${value} == ${data.number}`)
  //       // element.style.background = 'red';
  //     } else {
  //       // console.log('nada');
  //     }
  //   })
  //   return value;
  // }

}
