import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EvaluationService {

    questions: any = [
        {
            id: 1,
            question: ' De qué sistema de numeración es la sig. definición. El sistema decimal es el sistema de numeración posicional con base b=10, con 10 dígitos de notados por los símbolos: 0, 1, 2, 3, 4, 5, 6, 7, 8,9 ',
            image: null,
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: 'Sistema decimal'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: 'Sistema binario'
                },
                {
                    id: 3,
                    letter: 'c',
                    answer: 'Sistema octal'
                }
            ]
        },
        {
            id: 2,
            question: 'Este sistema numérico tiene como base al número 16 y a la vez emplea números sustituidos por letras, siendo: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, y F.',
            image: null,
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: 'Sistema octal'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: 'Sistema hexadecimal'
                },
                {
                    id: 3,
                    letter: 'c',
                    answer: 'Sistema decimal'
                }
            ]
        },
        {
            id: 3,
            question: 'La conversión del número 7010 a binario es: 10001002.',
            image: null,
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: 'Verdadero'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: 'falso'
                }
            ]
        },
        {
            id: 4,
            question: 'Cuál es el equivalente decimal del numero 1101.1112',
            image: null,
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: '13.89510'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: '13.87510'
                },
                {
                    id: 3,
                    letter: 'c',
                    answer: '13.97510'
                }
            ]
        },
        {
            id: 5,
            question: 'Cuál es el equivalente octal del numero 2452.',
            image: null,
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: ' 3658'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: '3568'
                },
                {
                    id: 3,
                    letter: 'c',
                    answer: '3758'
                }
            ]
        },
        {
            id: 6,
            question: 'Cual es el resultado de la multiplicación entre 4278 y 568',
            image: null,
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: '320428'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: '310428'
                },
                {
                    id: 3,
                    letter: 'c',
                    answer: '311428'
                }
            ]
        },
        {
            id: 7,
            question: 'Cual es el resultado de la sig. suma.- ',
            image: '../../assets/evaluation/img1.jpg',
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: '531EC16'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: ' 532EC16'
                },
                {
                    id: 3,
                    letter: 'c',
                    answer: '533EC16'
                }
            ]
        },
        {
            id: 8,
            question: 'Es un algoritmo que sirve para multiplicar (y dividir) números binarios con signo de manera rápida y sencilla en complemento a dos.',
            image: null,
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: 'Implementación del algoritmo de Booth en MPASM'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: 'Algoritmo De La División Binaria'
                },
                {
                    id: 3, letter: 'c',
                    answer: 'Algoritmo De Booth'
                }
            ]
        },
        {
            id: 9,
            question: 'Que tipo de suma es la siguiente:',
            image: '../../assets/evaluation/img2.jpg',
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: 'Suma de Decimales'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: 'Suma de octales'
                },
                {
                    id: 3,
                    letter: 'c',
                    answer: 'Suma de Hexadecimales'
                },
                {
                    id: 4,
                    letter: 'd',
                    answer: 'Ninguna de las opciones anteriores.'
                }
            ]
        },
        {
            id: 10,
            question: 'Cual es el resultado de la siguiente multiplicación hexadecimal: ',
            image: '../../assets/evaluation/img3.jpg',
            answers: [
                {
                    id: 1,
                    letter: 'a',
                    answer: '7 A C D 4'
                },
                {
                    id: 2,
                    letter: 'b',
                    answer: ' 7 A C D A '
                },
                {
                    id: 3,
                    letter: 'c',
                    answer: '7 4 C D A '
                },
                {
                    id: 4,
                    letter: 'd',
                    answer: 'Ninguna de las opciones anteriores.'
                }
            ]
        }
    ]

    correctAnswers: String[] = ['a','b','a','b','a','b','a','c','b','c'];
    answersCorrect: number[] = [1,2,1,2,1,2,1,3,2,3];

    constructor() { }

    getQuestions(): any[] {
        return this.questions;
    }

    getAnswers(): any[]{
        return this.correctAnswers;
    }

    getAnswersCorrect(): number[]{
        return this.answersCorrect;
    }
}
