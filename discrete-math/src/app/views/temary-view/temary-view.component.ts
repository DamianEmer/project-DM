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
      title: 'Sistemas numéricos',
      subtitle: 'Binario, octal, hexadecimal',
      route: 'sistemas-numericos'
    },
    {
      topic: 1.2,
      title: 'Conversiones numéricas',
      subtitle: 'Binario, octal, hexadecimal',
      route: 'conversiones-numericas'
    },
    {
      topic: 1.3,
      title: 'Operaciones básicas',
      subtitle: 'Binario, octal, hexadecimal',
      route: 'operaciones'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
