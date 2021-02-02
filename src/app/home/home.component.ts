import {Component} from '@angular/core';
import {WithLanguageComponent} from '../shared/with-language.component';
import {LanguageService} from '../shared/language.service';
import {LANGUAGES} from '../shared/languages.model';
import {ENGLISH_TRANSLATIONS, HomeTranslations, SPANISH_TRANSLATIONS} from './translations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends WithLanguageComponent {
  texts: HomeTranslations;
  constructor(protected languageService: LanguageService) {
    super(languageService);
    this.texts = SPANISH_TRANSLATIONS;
  }
  protected changeTextLanguage(language: LANGUAGES): void {
    if (language === LANGUAGES.SPANISH) {
      this.texts = SPANISH_TRANSLATIONS;
    } else {
      this.texts = ENGLISH_TRANSLATIONS;
    }
  }
}
