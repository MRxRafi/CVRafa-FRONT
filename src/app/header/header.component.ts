import {Component} from '@angular/core';
import {ENGLISH_TRANSLATIONS, HEADERS, NavbarModel, SPANISH_TRANSLATIONS} from './navbar.model';
import {ERROR} from '../shared/errors.model';
import {LANGUAGES} from '../shared/languages.model';
import {LanguageService} from '../shared/language.service';
import {WithLanguageComponent} from '../shared/with-language.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends WithLanguageComponent {
  headers: NavbarModel[];
  language: LANGUAGES;
  lastActiveLink = 0;
  constructor(protected languageService: LanguageService) {
    super(languageService);
    this.headers = HEADERS;
    this.language = LANGUAGES.SPANISH;
  }
  changeHeader(clickedHeader): void {
    if (clickedHeader < 0 || clickedHeader >= this.headers.length){
      throw new Error(ERROR.OUT_OF_BOUNDS);
    }
    this.headers[this.lastActiveLink].active = false;
    this.headers[clickedHeader].active = true;
    this.lastActiveLink = clickedHeader;
  }
  changeLanguage(): void{
    this.languageService.next();
  }
  protected changeTextLanguage(language: LANGUAGES): void {
    this.language = language;
    for (let i = 0; i < this.headers.length; i++) {
      if (language === LANGUAGES.SPANISH) {
        this.headers[i].headerDisplay = SPANISH_TRANSLATIONS[i];
      } else {
        this.headers[i].headerDisplay = ENGLISH_TRANSLATIONS[i];
      }
    }
  }
}
