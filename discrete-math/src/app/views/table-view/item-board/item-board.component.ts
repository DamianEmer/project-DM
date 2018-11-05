import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NumbersService } from '../../../services/numbers.service';
import { MatDialog } from '@angular/material/dialog';
import { ConverterModalComponent } from 'src/app/components/converter-modal/converter-modal.component';
import { DataSharedService } from 'src/app/services/data-shared.service';

@Component({
  selector: '[app-item-board]',
  templateUrl: './item-board.component.html',
  styleUrls: ['./item-board.component.scss']
})
export class ItemBoardComponent implements OnInit {

  @Input()row: any = {};
  
  @Input()show: boolean = false;

  @Output()number = new EventEmitter;
  
  @Output()equivalent = new EventEmitter;

  constructor(private numberService: NumbersService,
              private dialog: MatDialog,
              private dataSharedService: DataSharedService) { }

  ngOnInit() {
  }

  selectNumber(value: number){
    this.onSoundClicked('../../../../assets/audio/clicked.wav');
    this.number.emit(value);
    this.equivalent.emit(this.numberService.octalToDecimal(value));
  }

  sendEquivalent(value: number){
    
  }

  onSoundClicked(path: string):void {
    let sound = new Audio();
    sound.src = path;
    sound.play();
  }

  openDialogConverter(value: number):void {
    this.dataSharedService.setDataShared(value);
    const dialogRef = this.dialog.open(ConverterModalComponent, 
      {
        width: '800px', 
        height: '400px'
      });
  }
}
