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

  hexa: boolean = false;
  
  dataSource: any;
  
  select: number;
  
  equivalent: number;

  showInfo: boolean;

  constructor(private route: ActivatedRoute,
              public dialog: MatDialog,
              private numberService: NumbersService) { 
                this.showInfo = false;
  }

  ngOnInit() {

    this.name = this.route.snapshot.paramMap.get('title');

    if(this.name === "octal"){ 
      this.hexa = false
      this.dataSource = this.numberService.getOctals();
    }else{
      this.hexa = true
      this.dataSource = this.numberService.getHexadecimal();
    }

  }

  onSelect(value: number){
    this.select = value;
    console.log(`numero seleccionado ${this.select}`);
  }

  reciveEquivalent(value: number){
    this.equivalent = value;
    console.log(this.equivalent);
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
