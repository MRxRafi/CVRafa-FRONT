import { Component } from '@angular/core';
import {WithLanguageComponent} from '../shared/with-language.component';
import {LanguageService} from '../shared/language.service';
import {LANGUAGES} from '../shared/languages.model';
import {ContactTranslation, ENGLISH_TRANSLATIONS, SPANISH_TRANSLATIONS} from './translations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends WithLanguageComponent {
  texts: ContactTranslation;
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
