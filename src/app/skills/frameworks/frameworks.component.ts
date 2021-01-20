import {Component} from '@angular/core';
import {FrameworkModel, MOCK, NAME_SECTION, WORK_SECTION} from './framework.model';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})
export class FrameworksComponent {
  enumSections: WORK_SECTION[];
  nameSections: string[];
  data: FrameworkModel[];
  constructor() {
    this.enumSections = [ WORK_SECTION.FRONT_END, WORK_SECTION.BACK_END ];
    this.nameSections = NAME_SECTION;
    this.data = MOCK;
  }
  getStarClasses(score: number): string[] {
    const MAX_SCORE = 5;
    const CLASSES = ['icon fas fa-star', 'icon fas fa-star-half-alt', 'icon far fa-star'];
    const result: string[] = [];
    for (let i = 0; i < MAX_SCORE; i++) {
      if (i + 1 <= score) {
        result[i] = CLASSES[0];
      } else if (i < score && i + 1 > score) {
        result[i] = CLASSES[1];
      } else {
        result[i] = CLASSES[2];
      }
    }
    return result;
  }
}
