import { Component, OnInit, Input } from '@angular/core';
import { DataSharedService } from 'src/app/services/data-shared.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NumbersService } from 'src/app/services/numbers.service';

@Component({
  selector: 'app-converter-form',
  templateUrl: './converter-form.component.html',
  styleUrls: ['./converter-form.component.scss']
})
export class ConverterFormComponent implements OnInit {

  stepByStep: boolean = false;

  value: any;

  formConverter: FormGroup;

  @Input()label: string;

  constructor(private dataSharedService: DataSharedService,
              private numberService: NumbersService,
            private fb: FormBuilder) { }

  ngOnInit() {
    console.log('ConverterFormComponent');
    this.formConverter = this.fb.group({
      entry: ['', Validators.required],
      output: ['', Validators.required]
    });
   
    this.dataSharedService.dataShared$.subscribe(val => {
      console.log(val);
      this.formConverter.get('entry').setValue(val);
      this.formConverter.get('output').setValue(this.numberService.octalToDecimal(parseInt(val)));
      this.value = val;
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

}
