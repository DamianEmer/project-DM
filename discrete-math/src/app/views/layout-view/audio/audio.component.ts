import { Component, OnInit } from '@angular/core';

import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/faPlayCircle';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons/faPauseCircle';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  
  play = faPlayCircle;

  pause = faPauseCircle;

  isSound: boolean;

  constructor() {
    this.isSound = false;
  }

  ngOnInit() {
  }

  onPlay():void {
    let audio =  document.getElementsByTagName('audio')[0];
    audio.play();
    this.isSound = true;
  }

  onPause():void {
    let audio =  document.getElementsByTagName('audio')[0];
    audio.pause();
    this.isSound = false;
  }

}
