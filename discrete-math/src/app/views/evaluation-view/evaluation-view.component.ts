import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-evaluation-view',
  templateUrl: './evaluation-view.component.html',
  styleUrls: ['./evaluation-view.component.scss']
})
export class EvaluationViewComponent implements OnInit {

  formAnswers: FormGroup; // Formulario para lista de checkbox (respuestas)

  questions: any[]; // Almacenaara las 10 pregutas

  question: any; // Almacena la pregunta que mostrara al usuario

  finish: boolean; // Bandera para finalizar la evaluacion

  next: number; // Iterador para recorrer las preguntas

  selects: any[] = []; // Almacenara todas las respuestas seleccionadas

  respuestas: any[]; // Almacena resultados finales (correcto o incorrecto)

  constructor(private fb: FormBuilder, private evService: EvaluationService) {
    this.buildAnswers(0);
  }

  ngOnInit() {
    this.questions = this.evService.getQuestions();
    this.finish = false;
    this.next = 0;
  }

  // Construye la lista de check's
  buildAnswers(i: number) {
    const questions = this.evService.getQuestions();
    const list = questions[i].answers.map(obj => {
      return this.fb.control(false);
    })
    this.formAnswers = this.fb.group({
      answers: this.fb.array(list)
    })
  }

  //Comienza la evaluacion
  start() {
    this.finish = true;
    this.question = this.questions[0];
  }

  // Pasa de pregunta a pregunta
  nextQuestion(form?): any {
    this.next++;
    if (this.next === 10) {
      this.finish = false;
      this.results(this.selects);
      return 0;
    }
    this.question = this.questions[this.next];
    this.buildAnswers(this.next);
    this.optionSelected(form);
    this.formAnswers.reset();
  }

  // Obtiene los valores de la lista de check's de la preguta y los guarda
  optionSelected(form: any){
    const seleccionado = Object.assign({}, {
      answers: form.answers.map((value, i) => {
        return {
          id: this.questions[i].id,
          value
        }
      })
    })
    const seleccionados: any[] = [];
    seleccionados.push(seleccionado);
    this.save(seleccionados);
  }

  // Guarda exclusivamente el ID de la opcion seleccionada
  save(selects: any[]) {
    selects.map(select => {
      select.answers.map((opcion) => {
        if (opcion.value)
          this.selects.push(opcion)
      })
    });
  }

  // Guarda los resultados finales de la evaluación
  results(arr: any[]) {
    this.respuestas =
      arr.map((select, i) => {
        if (select.id == this.evService.getAnswersCorrect()[i]) {
          return {
            idQ: i,
            answer: 'correct'
          }
        } else {
          return {
            idQ: i,
            answer: 'incorrect'
          }
        }
      })
  }

  get getAnswers() {
    return this.formAnswers.get('answers') as FormArray;
  }

}



