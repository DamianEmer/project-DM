import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-item-board]',
  templateUrl: './item-board.component.html',
  styleUrls: ['./item-board.component.scss']
})
export class ItemBoardComponent implements OnInit {

  @Input()numbers: any;

  constructor() { }

  ngOnInit() {
  }

}
