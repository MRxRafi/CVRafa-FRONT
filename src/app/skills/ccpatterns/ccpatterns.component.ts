import { Component, OnDestroy, OnInit } from '@angular/core';
import {WithLanguageComponent} from '../../shared/with-language.component';
import {ENGLISH_TRANSLATIONS, CCPatternTranslation, SPANISH_TRANSLATIONS} from './translations';
import {LanguageService} from '../../shared/language.service';
import {LANGUAGES} from '../../shared/languages.model';

@Component({
  selector: 'app-ccpatterns',
  templateUrl: './ccpatterns.component.html',
  styleUrls: ['./ccpatterns.component.css']
})
export class CcpatternsComponent extends WithLanguageComponent implements OnInit, OnDestroy {
  texts!: CCPatternTranslation;
  constructor(protected override languageService: LanguageService) {
    super(languageService);
    this.changeTextLanguage(this.languageService.getLanguage());
  }
  ngOnInit(): void {
    this.languageComponentOnInit();
  }

  ngOnDestroy(): void {
    this.languageComponentOnDestroy();
  }
  protected override changeTextLanguage(language: LANGUAGES): void {
    if (language === LANGUAGES.SPANISH) {
      this.texts = SPANISH_TRANSLATIONS;
    } else {
      this.texts = ENGLISH_TRANSLATIONS;
    }
  }
}
