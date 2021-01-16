import { Component } from '@angular/core';
import {NavbarModel, headers} from './navbar.model';

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
    this.headers[this.lastActiveLink].active = false;
    this.headers[clickedHeader].active = true;
    this.lastActiveLink = clickedHeader;
  }
}
