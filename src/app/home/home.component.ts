import { Component } from '@angular/core';
import {STUDIES, StudyRow} from './studies.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  studies: StudyRow[];
  constructor() {
    this.studies = STUDIES;
  }
}
