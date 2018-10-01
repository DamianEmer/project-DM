import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temary-view',
  templateUrl: './temary-view.component.html',
  styleUrls: ['./temary-view.component.scss']
})
export class TemaryViewComponent implements OnInit {

  temary: any = [
    {
      topic: 1.1,
      title: 'Sistemas numericos',
      subtitle: 'Binario, octal, hexadecimal',
      route: 'sistemas-numericos'
    },
    {
      topic: 1.2,
      title: 'Conversiones Numericas',
      subtitle: 'Binario, octal, hexadecimal',
      route: 'conversiones-numericas'
    },
    {
      topic: 1.3,
      title: 'Operaciones Basicas',
      subtitle: 'Binario, octal, hexadecimal',
      route: 'operaciones'
    },
    {
      topic: 1.4,
      title: 'Algoritmos de Booth',
      subtitle: 'La multiplicacion binaria',
      route: 'algoritmos-booth'
    },
    {
      topic: 1.5,
      title: 'Algoritmos de division binaria',
      subtitle: 'division',
      route: 'algoritmos-division'
    }    
  ]

  constructor() { }

  ngOnInit() {
  }

}
