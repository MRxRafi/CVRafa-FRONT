import { Component } from '@angular/core';
import {WithLanguageComponent} from '../../shared/with-language.component';
import {LanguageService} from '../../shared/language.service';
import {LANGUAGES} from '../../shared/languages.model';
import {ENGLISH_TRANSLATIONS, SPANISH_TRANSLATIONS, MethodologiesTranslation} from './translations';

@Component({
  selector: 'app-methodologies',
  templateUrl: './methodologies.component.html',
  styleUrls: ['./methodologies.component.css']
})
export class MethodologiesComponent extends WithLanguageComponent {
  texts!: MethodologiesTranslation;
  constructor(protected override languageService: LanguageService) {
    super(languageService);
    this.changeTextLanguage(this.languageService.getLanguage());
  }
  protected override changeTextLanguage(language: LANGUAGES): void {
    if (language === LANGUAGES.SPANISH) {
      this.texts = SPANISH_TRANSLATIONS;
    } else {
      this.texts = ENGLISH_TRANSLATIONS;
    }
  }

}
