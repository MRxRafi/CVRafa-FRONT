import { Component } from '@angular/core';
import {NavbarModel, headers} from './navbar.model';
import {ERROR} from '../shared/errors.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headers: NavbarModel[];
  lastActiveLink = 0;
  constructor() {
    this.headers = headers;
  }
  changeHeader(clickedHeader): void {
    if (clickedHeader < 0 || clickedHeader >= headers.length){
      throw new Error(ERROR.OUT_OF_BOUNDS);
    }
    this.headers[this.lastActiveLink].active = false;
    this.headers[clickedHeader].active = true;
    this.lastActiveLink = clickedHeader;
  }
}
