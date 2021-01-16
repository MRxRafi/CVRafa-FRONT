export interface NavbarModel {
  routerlink: string;
  headerDisplay: string;
  active: boolean;
  icon?: string;
}

export const headers: NavbarModel[] = [
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
