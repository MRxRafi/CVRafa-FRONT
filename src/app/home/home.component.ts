import {Component, OnDestroy, OnInit} from '@angular/core';
import {WithLanguageComponent} from '../shared/with-language.component';
import {LanguageService} from '../shared/language.service';
import {LANGUAGES} from '../shared/languages.model';
import {ENGLISH_TRANSLATIONS, HomeTranslations, SPANISH_TRANSLATIONS} from './translations';
import {StudyService} from './study.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Study} from './study.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends WithLanguageComponent implements OnInit {
  texts!: HomeTranslations;
  studies!: Observable<Study[]>;

  constructor(protected override languageService: LanguageService, private studyService: StudyService) {
    super(languageService);
  }

  override ngOnInit(): void {
    this.changeTextLanguage(this.languageService.getLanguage());
  }

  protected override changeTextLanguage(language: LANGUAGES): void {
    if (language === LANGUAGES.SPANISH) {
      this.texts = SPANISH_TRANSLATIONS;
    } else {
      this.texts = ENGLISH_TRANSLATIONS;
    }
    this.studies = this.searchStudies(language);
  }
  searchStudies(language: LANGUAGES): Observable<Study[]> {
    return this.studyService.searchAll()
      .pipe(
        map(studies => studies.filter(study => {
          if (study.language === 'ES' && language === LANGUAGES.SPANISH) { return true; }
          else if (study.language === 'EN' && language === LANGUAGES.ENGLISH) { return true; }
          else { return false; }
        }))
      );
  }
}
