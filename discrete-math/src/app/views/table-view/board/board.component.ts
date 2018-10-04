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
  octal: any [];
  dataSource;
  displayedColumns: string[] = ['f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7'];

  constructor(private route: ActivatedRoute,
              private numberService: NumbersService) { 

    this.octal = numberService.getOctals();
    this.dataSource = this.octal;    
  }

  ngOnInit() {
    this.table = this.route.snapshot.paramMap.get('title');
    console.log(this.table);
  }

  /// Algortimo de conversion octal-decimal
  cambiar(value: number ):string{
    let decimal: string = '';
    let num: any;
    let dec: number;
    for (let i=value.toString().length; i>= 0; i--){
      num = parseInt(value.toString().charAt(i-1));
      dec = num * Math.pow(8, i);
      if(i==0)
        break;
      decimal+=dec;
    }
    return `decimal: ${decimal} \n binario: ${1001}`;
  }

}
