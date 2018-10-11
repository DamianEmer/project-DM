import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../../../services/lessons.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lessons: any = [];
  lesson: any = [];
  titles = ['sistemas-numericos', 'conversiones-numericas','operaciones','algoritmos-booth','algoritmos-division'];
  title: string;
  id: number = 0;
  
  constructor(  private route: ActivatedRoute,
                private lessonsService: LessonsService) {   
    this.lessons = lessonsService.getLessons();                
  }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('id');
    this.id = this.titles.findIndex(element => element == this.title );   
    this.lesson.push(this.lessonsService.getLesson(this.id));
    console.log(this.lesson);
  }

}
