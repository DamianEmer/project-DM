import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumbersService } from '../../../services/numbers.service';
import { ThemePalette } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoTableModalComponent } from 'src/app/components/info-table-modal/info-table-modal.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input()color: ThemePalette;

  name: string;

  isHexa: boolean = false;
  
  dataSource: any;

  showInfo: boolean;

  constructor(private route: ActivatedRoute,
              public dialog: MatDialog,
              private numberService: NumbersService) { 
                this.showInfo = false;
  }

  ngOnInit() {

    this.name = this.route.snapshot.paramMap.get('title');

    if(this.name === "octal"){ 
      this.isHexa = false
      this.dataSource = this.numberService.getOctals();
    }else{
      this.isHexa = true
      this.dataSource = this.numberService.getHexadecimal();
    }

  }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '800px';
    dialogConfig.height = '300px';
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = { name: this.name };

    const dialogRef = this.dialog.open(InfoTableModalComponent, dialogConfig);
  }
}
