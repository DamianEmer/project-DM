import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { NumbersService } from '../../services/numbers.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../info-table-modal/info-table-modal.component';
import { Observable, Observer } from 'rxjs';
import { DEC } from '@angular/material';
import { DataSharedService } from 'src/app/services/data-shared.service';

export interface ExampleTab {
  label: string;
}

enum Systems {
  DEC = 'Decimal',
  OCT = 'Octal',
  HEX = 'Hexadecimal',
  BIN = 'Binario'
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter-modal.component.html',
  styleUrls: ['./converter-modal.component.scss']
})
export class ConverterModalComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  name: string;

  constructor(private dataSharedService: DataSharedService,
    public dialogRef: MatDialogRef<ConverterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.name = data.name;
    this.asyncTabs = Observable.create((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        if (this.name == 'octal')
          observer.next([
            { label: Systems.DEC },
            { label: Systems.HEX },
            { label: Systems.BIN },
          ]);
        else
          observer.next([
            { label: Systems.DEC },
            { label: Systems.OCT },
            { label: Systems.BIN },
          ]);
      }, 1000);
    });
  }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onChange(event: any) {
    this.dataSharedService.setDataTabsShared(event.index);
  }

}