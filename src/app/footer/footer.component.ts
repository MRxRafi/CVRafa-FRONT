import { Component } from '@angular/core';
import {WithLanguageComponent} from '../shared/with-language.component';
import {ENGLISH_TRANSLATIONS, FooterTranslation, SPANISH_TRANSLATIONS} from './translations';
import {LanguageService} from '../shared/language.service';
import {LANGUAGES} from '../shared/languages.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends WithLanguageComponent {
  texts!: FooterTranslation;
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
