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

  // Algortimo de conversion Octal-Decimal
  octalToDecimal( value: number): string {
    let dec: number = 0;
    let j:number = 0;
    var num;
    //console.log(`Digitos de ${value} : ${value.toString().length}`);
    for ( let i = value.toString().length-1 ; i >= 0; i-- ){
      num = parseInt( value.toString().charAt(i) );
      dec += num * Math.pow(8, j);
      //console.log(`num: ${num} - dec: ${dec} - j: ${j}`);
      j++;     
    }
    return `Octal: ${value} - Decimal: ${dec.toString()}`;
  }

}
