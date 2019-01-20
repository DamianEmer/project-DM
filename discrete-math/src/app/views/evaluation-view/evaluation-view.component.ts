import { Component, OnInit } from '@angular/core';
import { EvaluationService } from 'src/app/services/evaluation.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fbind } from 'q';

@Component({
  selector: 'app-evaluation-view',
  templateUrl: './evaluation-view.component.html',
  styleUrls: ['./evaluation-view.component.scss']
})
export class EvaluationViewComponent implements OnInit {

  next: number; // contador de pregunta

  questions:any; // almacena todas la preguntas

  question: any; // pregunta que sera mostrada

  finish: boolean; // Bandera para mostrar resultados

  form: FormGroup;

  selects: any[];

  constructor(private evalService: EvaluationService,
              private fb: FormBuilder) {
    this.next = 1;
    this.questions = this.evalService.getQuestions();
    this.form = fb.group({
      answer: []
    });
  }

  ngOnInit() {
    this.finish = true;
    this.question = this.questions[0];
  }

  nextQuestion(){   
    if(this.next <= 10){
      this.question = this.questions[this.next];
      this.next++;
      if(this.next == 10){
        this.finish = false;
      }
    }
    else{
      console.log(`resultado ${this.next}`);
    }
  }

  results(arr: String[]): void {

  }

}
