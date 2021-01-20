import { Component } from '@angular/core';
import {MODEL, SectionModel} from './section.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  cardsModel: SectionModel[];
  constructor() {
    this.cardsModel = MODEL;
  }
}
