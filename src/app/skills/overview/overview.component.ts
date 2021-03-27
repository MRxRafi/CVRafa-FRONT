import { Component } from '@angular/core';
import {WithLanguageComponent} from '../../shared/with-language.component';
import {ENGLISH_TRANSLATIONS, SkillsTranslation, SPANISH_TRANSLATIONS} from './translations';
import {LanguageService} from '../../shared/language.service';
import {LANGUAGES} from '../../shared/languages.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent extends WithLanguageComponent {
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
