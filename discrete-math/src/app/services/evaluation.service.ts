import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  questions: any = [
    {
      id: 1,
      question: ' De qué sistema de numeración es la sig. definición. El sistema decimal es el sistema de numeración posicional con base b=10, con 10 dígitos de notados por los símbolos: 0, 1, 2, 3, 4, 5, 6, 7, 8,9 ',
      answers: ['sistema decimal', 'sistema binario', 'sistema octal'],
      answer: 'sistema decimal' 
    },
    {
      id: 2,
      question: 'Este sistema numérico tiene como base al número 16 y a la vez emplea números sustituidos por letras, siendo: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, y F.',
      answers: ['sistema decimal', 'sistema binario', 'sistema octal'],
      answer: 'sistema decimal' 
    },
    {
      id: 3,
      question: 'La conversión del número 7010 a binario es: 10001002. ',
      answers: ['verdadero', 'falso'],
      answer: 'verdadero' 
    },
    {
      id: 4,
      question: 'Cuál es el equivalente decimal del numero 1101.1112.',
      answers: [13.89510, 13.87510, 13.97510],
      answer: 13.89510
    },
    {
      id: 5,
      question: 'Cuál es el equivalente octal del numero 2452.',
      answers: [3658, 3568, 3758 ],
      answer: 3658
    }
  ]

  constructor() { }

  getQuestions(){
    return this.questions;
  }
}
