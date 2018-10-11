import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-item-board]',
  templateUrl: './item-board.component.html',
  styleUrls: ['./item-board.component.scss']
})
export class ItemBoardComponent implements OnInit {

  @Input()row: any = {};
  @Input()show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
