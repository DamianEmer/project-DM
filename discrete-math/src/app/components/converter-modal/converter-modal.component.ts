import { Component, OnInit, Input, Inject } from '@angular/core';
import { NumbersService } from '../../services/numbers.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../info-table-modal/info-table-modal.component';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter-modal.component.html',
  styleUrls: ['./converter-modal.component.scss']
})
export class ConverterModalComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  constructor(private numberService: NumbersService,
              public dialogRef: MatDialogRef<ConverterModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { 
    this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Decimal', content: 'Conversion del sistema octal a decimal'},
          {label: 'Hexadecimal', content: 'Conversion del sistema octal a hexadecimal'},
          {label: 'Binario', content: 'Conversion del sistema octal a binario'},
        ]);
      }, 1000);
    });
  }

  ngOnInit() {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}