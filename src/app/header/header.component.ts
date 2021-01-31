import { Component } from '@angular/core';
import {NavbarModel, HEADERS} from './navbar.model';
import {ERROR} from '../shared/errors.model';
import {LANGUAGES} from './languages.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  language: string;
  headers: NavbarModel[];
  lastActiveLink = 0;
  constructor() {
    this.language = LANGUAGES[0];
    this.headers = HEADERS;
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
    if (this.language === LANGUAGES[0]) {
      this.language = LANGUAGES[1];
    } else {
      this.language = LANGUAGES[0];
    }
  }
}
