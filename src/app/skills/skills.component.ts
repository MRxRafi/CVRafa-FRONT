import { Component } from '@angular/core';
import {WithLanguageComponent} from '../shared/with-language.component';
import {LanguageService} from '../shared/language.service';
import {LANGUAGES} from '../shared/languages.model';
import {ENGLISH_TRANSLATIONS, SkillsTranslation, SPANISH_TRANSLATIONS} from './translations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent extends WithLanguageComponent {
  texts: SkillsTranslation;
  constructor(protected languageService: LanguageService) {
    super(languageService);
    this.changeTextLanguage(this.languageService.getLanguage());
  }
  protected changeTextLanguage(language: LANGUAGES): void {
    if (language === LANGUAGES.SPANISH) {
      this.texts = SPANISH_TRANSLATIONS;
    } else {
      this.texts = ENGLISH_TRANSLATIONS;
    }
  }
}
