export interface NavbarModel {
  routerlink: string;
  headerDisplay: string;
  active: boolean;
  icon?: string;
}

export const HEADERS: NavbarModel[] = [
  {
    routerlink: 'home',
    headerDisplay: 'Inicio',
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
  }
];

export const SPANISH_TRANSLATIONS = ['Inicio', 'Habilidades', 'Contacto'];

export const ENGLISH_TRANSLATIONS = ['Home', 'Skills', 'Contact'];
