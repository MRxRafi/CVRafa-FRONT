import {Component} from '@angular/core';
import {WithLanguageComponent} from '../../shared/with-language.component';
import {LanguageService} from '../../shared/language.service';
import {LANGUAGES} from '../../shared/languages.model';
import {ENGLISH_TRANSLATIONS, FrameworksTranslation, SPANISH_TRANSLATIONS} from './translations';
import {FrameworkService} from './framework.service';
import {Framework} from './framework.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.css']
})
export class FrameworksComponent extends WithLanguageComponent {
  texts!: FrameworksTranslation;
  frameworks: Observable<Framework[]>;
  constructor(protected override languageService: LanguageService, private frameworkService: FrameworkService) {
    super(languageService);
    this.changeTextLanguage(this.languageService.getLanguage());
    this.frameworks = this.frameworkService.searchAll();
    this.frameworks.subscribe(frameworks => console.log(frameworks));
  }
  protected override changeTextLanguage(language: LANGUAGES): void {
    if (language === LANGUAGES.SPANISH) {
      this.texts = SPANISH_TRANSLATIONS;
    } else {
      this.texts = ENGLISH_TRANSLATIONS;
    }
  }
  getStarClasses(score: number): string[] {
    const MAX_SCORE = 5;
    const CLASSES = ['icon fas fa-star', 'icon fas fa-star-half-alt', 'icon far fa-star'];
    const result: string[] = [];
    for (let i = 0; i < MAX_SCORE; i++) {
      if (i + 1 <= score) {
        result[i] = CLASSES[0];
      } else if (i < score && i + 1 > score) {
        result[i] = CLASSES[1];
      } else {
        result[i] = CLASSES[2];
      }
    }
    return result;
  }
}
