import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  src: string;

  constructor() {
    
  }

  ngOnInit() {
    this.src = '../../../../assets/logos/'+this.title+'.png';
    console.log(this.src);
  }

}
