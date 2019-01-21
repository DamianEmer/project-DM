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

  constructor(private fb: FormBuilder, private evService: EvaluationService) {

    this.formAnswers = this.fb.group({
      answers: this.buildAnswers(0)
    })
  }

  ngOnInit() {
    this.questions = this.evService.getQuestions();
    this.finish = true;
    this.next = 0;
    this.question = this.questions[0];
  }

  buildAnswers(i: number): FormArray {
    console.log('ite: ', i);
    const questions = this.evService.getQuestions();
    const list = questions[i].answers.map(obj => {
      console.log(obj)
      return this.fb.control(false);
    })
    return this.fb.array(list);
  }

  nextQuestion(form): any {
    if (this.next === 10) {
      this.finish = false;
      console.log('finalizo la evaluacion ', this.selects);
      return 0;
    }
    //console.log('next: ', this.next);
    if(this.next == 2){
      this.next++;
    }
    this.question = this.questions[this.next];
    this.buildAnswers(this.next);
    console.log("pregunta",this.question);
    //console.log("controls: ",this.getAnswers.controls);
    const seleccionado = Object.assign({}, {
      answers: form.answers.map((value, i) => {
        //console.log(`i: ${i} -> value: ${value}`);
        return {
          id: this.questions[i].id,
          value
        }
      })
    })
    //console.log(seleccionado);
    const seleccionados: any[] = [];
    seleccionados.push(seleccionado);
    this.guardar(seleccionados);
    this.formAnswers.reset();
    this.next++;
  }

  guardar(selecionado: any[]) {
    selecionado.map(select => {
      
      select.answers.map((opcion) => {
        //console.log('save', opcion);
        if (opcion.value)
          this.selects.push(opcion)
      })
    });
  }

  get getAnswers() {
    return this.formAnswers.get('answers') as FormArray;
  }

}



