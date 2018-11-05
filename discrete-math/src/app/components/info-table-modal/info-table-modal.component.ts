import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'system-detail',
  templateUrl: './info-table-modal.component.html',
  styleUrls: ['./info-table-modal.component.scss']
})
export class InfoTableModalComponent implements OnInit {

  name: string;

  info: string;

  constructor(
    public dialogRef: MatDialogRef<InfoTableModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.name = data.name;
      if(this.name == 'octal')
        this.info = 'El sistema octal es .....';
      else
        this.info = 'El sistema hexa es....';
    }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
