import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataSharedService } from 'src/app/services/data-shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NumbersService } from 'src/app/services/numbers.service';

enum Systems {
  DECIMAL = 0,
  HEXADECIMAL = 1,
  BINARIO = 2
}

enum Tables {
  OCTAL = 'octal',
  HEXA = 'hexadecimal'
}

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.scss']
})
export class ConverterFormComponent implements OnInit {

  stepByStep: boolean = false;

  value: any;

  tab: number;

  formConverter: FormGroup;

  @Input()label: string;

  @Input()name: string;

  constructor(private dataSharedService: DataSharedService,
              private numberService: NumbersService,
            private fb: FormBuilder) { 
            }

  ngOnInit() {
    this.formConverter = this.fb.group({
      entry: ['', Validators.required],
      output: ['', Validators.required]
    });

    this.dataSharedService.dataTabsShared$.subscribe(tab => {
      this.tab = tab;
      this.onSelectTab(this.tab);
    })
  }

  showSteps():void{
    this.stepByStep = (this.stepByStep === true) ? false : true;
  }

  convertNumber(){
    this.formConverter.get('output').setValue(
      this.numberService.octalToDecimal(
        parseInt(this.formConverter.get('entry').value)
      )
    )
  }

  /* IDEA: 
    Ver en que tabla me encuentro actualmente
    Ver en que tab me encuentro para realizar la conversion
    Realizar intercambio de conversiones segun las tabs de las tabla que fue seleccionada
  */
  onSelectTab(tab: number): void {    
    this.dataSharedService.dataNumberShared$.subscribe(
      number => {
        this.formConverter.get('entry').setValue(number);
        switch(tab){
          case Systems.DECIMAL: 
            console.log('DESDE TABLA ', this.name)
            if(this.name == Tables.OCTAL)
              this.formConverter.get('output').setValue(this.numberService.octalToDecimal(parseInt(number)));
            else
              if(typeof number === 'string')
                this.formConverter.get('output').setValue(this.numberService.hexaToDecimal(number));
              else
                this.formConverter.get('output').setValue(this.numberService.hexaToDecimal(number));
            break;
          case Systems.HEXADECIMAL:
            //console.log('Conversion a hexadecimal')
            break;
          case Systems.BINARIO:
            //console.log('Conversion a binario')
            break;
        }
      }
    )   
  }

}
