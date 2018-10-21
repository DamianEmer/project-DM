import { Component, OnInit, Input } from '@angular/core';
import { NumbersService } from '../../../services/numbers.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  @Input()num: number = 0;

  @Input()numEquiv: number = 0;

  constructor(private numberService: NumbersService) { 
    
  }

  ngOnInit() {
    
  }
}