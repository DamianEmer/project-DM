import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataSharedService } from 'src/app/services/data-shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NumbersService } from 'src/app/services/numbers.service';

enum Systems {
  DECIMAL = 0,
  HEXADECIMAL = 1,
  BINARIO = 2,
  OCTAL = 3
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

  imageSteps: string;

  tab: number;

  formConverter: FormGroup;

  @Input() label: string;

  @Input() name: string;

  btnShow: boolean;

  numberStep: any[];

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
      this.onSelectTab2(this.tab);
    })

    this.dataSharedService.dataNumberShared$.subscribe(number => {
      let steps = this.numberService.getSteps().filter(val => val.from === this.name);
      this.numberStep = steps.filter(data => data.number === number);
      if (this.numberStep.length >= 1)
        this.btnShow = (this.numberStep[0].number) ? true : false;
    })
  }

  showSteps2(): void {
    this.stepByStep = (this.stepByStep === true) ? false : true;
    if (this.numberStep.length != 0) {
      this.numberStep[0].type.map(val => {
        console.log(`type: ${val.type} - tab: ${this.tab}`);
        if (val.type == this.tab) {
          console.log(val.src);
          this.imageSteps = val.src;
        }
      })
    }
  }

  // Metodo para accidonar btn de conversion en el formulario
  convertNumber(): void {
    this.dataSharedService.dataTabsShared$.subscribe(tab => {
      let number = this.formConverter.get('entry').value;
      this.selectSystemConvert(tab, number);
    })
  }

  onSelectTab2(tab: any): void {
    let tabIndex: number;
    this.dataSharedService.dataTabsShared$.subscribe(index => tabIndex = index)
    this.dataSharedService.dataNumberShared$.subscribe(
      number => {
        console.log('entry: ', number);
        this.formConverter.get('entry').setValue(number);
        this.selectSystemConvert(tab, number);
      }
    )
  }

  selectSystemConvert(tab: any, number: any): void {
    switch (this.name) {
      case Tables.OCTAL:
        switch (tab) {
          case Systems.DECIMAL:
            this.formConverter.get('output').setValue(this.numberService.fromOctal(number));
            break;
          case Systems.HEXADECIMAL:
            let v1 = this.numberService.fromOctal(number);
            this.formConverter.get('output').setValue(this.numberService.convertToHexa(v1));
            break;
          case Systems.BINARIO:
            let v2 = this.numberService.fromOctal(number);
            this.formConverter.get('output').setValue(this.numberService.convertToBinay(v2));
            break;
        }
        break;
      case Tables.HEXA:
        switch (tab) {
          case Systems.DECIMAL:
            this.formConverter.get('output').setValue(this.numberService.fromHexa(number));
            break;
          case Systems.HEXADECIMAL:
            let v1 = this.numberService.fromHexa(number);
            console.log('hexa-octal: ', v1);
            this.formConverter.get('output').setValue(this.numberService.convertToOctal(v1));
            break;
          case Systems.BINARIO:
            let v2 = this.numberService.fromHexa(number);
            this.formConverter.get('output').setValue(this.numberService.convertToBinay(v2));
            break;
        }
        break;
    }
  }

}
