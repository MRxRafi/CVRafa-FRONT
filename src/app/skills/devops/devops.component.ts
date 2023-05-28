import { Component } from '@angular/core';
import {WithLanguageComponent} from '../../shared/with-language.component';
import {DevopsTranslation, ENGLISH_TRANSLATIONS, SPANISH_TRANSLATIONS} from './translations';
import {LanguageService} from '../../shared/language.service';
import {LANGUAGES} from '../../shared/languages.model';

@Component({
  selector: 'app-devops',
  templateUrl: './devops.component.html',
  styleUrls: ['./devops.component.css']
})
export class DevopsComponent extends WithLanguageComponent {
  texts!: DevopsTranslation;
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
