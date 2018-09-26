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
      subtitle: 'Binario, octal, hexadecimal'
    },
    {
      topic: 1.2,
      title: 'Conversiones Numericas',
      subtitle: 'Binario, octal, hexadecimal'
    },
    {
      topic: 1.3,
      title: 'Operaciones Basicas',
      subtitle: 'Binario, octal, hexadecimal'
    }]

  constructor() { }

  ngOnInit() {
  }

}
