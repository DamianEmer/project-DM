import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NumbersService } from '../../../services/numbers.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  table: string;

  hexa: boolean = false;
  
  dataSource: any;
  
  select: number;
  
  equivalent: number;

  constructor(private route: ActivatedRoute,
              private numberService: NumbersService) { 
  }

  ngOnInit() {

    this.table = this.route.snapshot.paramMap.get('title');

    if(this.table === "octal"){ 
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
}
