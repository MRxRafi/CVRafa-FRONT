export interface SectionModel {
  title: string;
  description: string;
  routerlink: string;
  img_src: string;
  img_alt: string;
}

export const MODEL: SectionModel[] = [
  {
    title: 'CleanCode y patrones',
    description: 'En esta sección están agrupadas mis habilidades respecto a los aspectos técnicos más propios de la Ingeniería del Software.',
    routerlink: 'ccpatterns',
    img_src: '../../assets/img/uml.png',
    img_alt: 'UML image'
  },
  {
    title: 'Frameworks',
    description: 'Aquí valoro y trato de explicar mis habilidades con cada Framework que conozco, a través de una puntuación y la explicación.',
    routerlink: 'frameworks',
    img_src: '../../assets/img/framework.jpg',
    img_alt: 'Framework image'
  },
  {
    title: 'DevOps',
    description: 'Me he interesado mucho por los contenidos de esta sección a lo largo del máster en Ingeniería Web. Trato de explicar en qué tengo conocimientos.',
    routerlink: 'devops',
    img_src: '../../assets/img/devops.png',
    img_alt: 'DevOps image'
  }
];
