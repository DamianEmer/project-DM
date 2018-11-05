import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {

  @Input() title: string;
  src: string;

  constructor() {
    
  }

  ngOnInit() {
    this.src = '../../../assets/logos/'+this.title+'.png';
    console.log(this.src);
  }

}
