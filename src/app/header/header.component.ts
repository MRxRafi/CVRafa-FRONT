import { Component } from '@angular/core';
import {NavbarModel} from './navbar.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headers: NavbarModel[];
  lastActiveLink = 0;
  constructor() {
    this.headers = [
      {
        routerlink: 'home',
        headerDisplay: 'Home',
        active: true,
        icon: 'fas fa-home'
      },
      {
        routerlink: 'skills',
        headerDisplay: 'Habilidades',
        active: false,
        icon: 'fas fa-book'
      },
      {
        routerlink: 'contact',
        headerDisplay: 'Contacto',
        active: false,
        icon: 'fas fa-phone'
      },
    ];
  }
  changeHeader(clickedHeader): void {
    this.headers[this.lastActiveLink].active = false;
    this.headers[clickedHeader].active = true;
    this.lastActiveLink = clickedHeader;
  }
}
