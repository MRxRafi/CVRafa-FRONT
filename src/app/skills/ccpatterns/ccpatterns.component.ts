import { Component } from '@angular/core';
import {WithLanguageComponent} from '../../shared/with-language.component';
import {ENGLISH_TRANSLATIONS, CCPatternTranslation, SPANISH_TRANSLATIONS} from './translations';
import {LanguageService} from '../../shared/language.service';
import {LANGUAGES} from '../../shared/languages.model';

@Component({
  selector: 'app-ccpatterns',
  templateUrl: './ccpatterns.component.html',
  styleUrls: ['./ccpatterns.component.css']
})
export class CcpatternsComponent extends WithLanguageComponent {
  texts: CCPatternTranslation;
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
