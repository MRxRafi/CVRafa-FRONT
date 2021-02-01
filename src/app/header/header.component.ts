import {Component, OnDestroy, OnInit} from '@angular/core';
import {HEADERS, NavbarModel} from './navbar.model';
import {ERROR} from '../shared/errors.model';
import {LANGUAGES} from '../shared/languages.model';
import {LanguageService} from '../shared/language.service';
import {Subscription} from 'rxjs';
import {ENGLISH_TEXTS, SPANISH_TEXTS, Texts} from './allText.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  headers: NavbarModel[];
  allTexts: Texts;
  lastActiveLink = 0;
  constructor(private languageService: LanguageService) {
    this.headers = HEADERS;
    this.allTexts = SPANISH_TEXTS;
  }
  ngOnInit(): void {
    this.subscription = this.languageService.subscribe(
      () => this.changeLanguageTexts()
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  changeHeader(clickedHeader): void {
    if (clickedHeader < 0 || clickedHeader >= HEADERS.length){
      throw new Error(ERROR.OUT_OF_BOUNDS);
    }
    this.headers[this.lastActiveLink].active = false;
    this.headers[clickedHeader].active = true;
    this.lastActiveLink = clickedHeader;
  }
  changeLanguage(): void{
    if (this.languageService.getLanguage() === LANGUAGES.SPANISH) {
      this.languageService.next(LANGUAGES.ENGLISH);
    } else {
      this.languageService.next(LANGUAGES.SPANISH);
    }
  }
  private changeLanguageTexts(): void { // TODO Bug: Cambia la bandera cuando se da dos veces click
    if (this.languageService.getLanguage() === LANGUAGES.SPANISH) {
      this.allTexts = ENGLISH_TEXTS;
    } else {
      this.allTexts = SPANISH_TEXTS;
    }
  }
}
