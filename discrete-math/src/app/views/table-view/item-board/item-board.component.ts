import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NumbersService } from '../../../services/numbers.service';

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

  constructor(private numberService: NumbersService) { }

  ngOnInit() {
  }

  selectNumber(value: number){
    this.number.emit(value);
    this.equivalent.emit(this.numberService.octalToDecimal(value));
  }

  sendEquivalent(value: number){
    
  }
}
