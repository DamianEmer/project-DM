import { Component, OnInit, Input} from '@angular/core';
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

  @Input()name: string;

  constructor(private dialog: MatDialog,
              private dataSharedService: DataSharedService) { }

  ngOnInit() {
  }

  onPlayClicked(path: string):void {
    let sound = new Audio();
    sound.src = path;
    sound.play();
  }

  openDialogConverter(value: any):void {
    this.onPlayClicked('../../../../assets/audio/clicked.wav');
    this.dataSharedService.setDataShared(value);
    const dialogRef = this.dialog.open(ConverterModalComponent, 
      {
        width: '800px', 
        height: '400px',
        data: {
          name: this.name
        }
      });
  }

  onHover(n: number) {
    this.dataSharedService.setCurrentNumber(n);
  }
}
