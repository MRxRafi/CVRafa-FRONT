import {SectionModel, IMAGE_SRC} from './section.model';

export interface SkillsTranslation {
  skills: SectionModel[];
}

export const SPANISH_TRANSLATIONS: SkillsTranslation = {
  skills: [
      {
        title: 'Metodologías de desarrollo',
        description: 'Aquí detallo las metodologías con las que he tenido contacto y que son de especial interés.',
        routerlink: 'methodologies',
        img_src: IMAGE_SRC.agile,
        img_alt: 'Imagen SCRUM'
      },
      {
        title: 'CleanCode y patrones',
        description: 'En esta sección están agrupadas mis habilidades respecto a los aspectos técnicos más propios de la Ingeniería del Software.',
        routerlink: 'ccpatterns',
        img_src: IMAGE_SRC.uml,
        img_alt: 'Imagen UML'
      },
      {
        title: 'Frameworks',
          description: 'Aquí valoro y trato de explicar mis habilidades con cada Framework que conozco.',
        routerlink: 'frameworks',
        img_src: IMAGE_SRC.framework,
        img_alt: 'Imagen Framework'
      },
      {
        title: 'DevOps',
          description: 'Me he interesado mucho por los contenidos de esta sección a lo largo del máster en Ingeniería Web. Trato de explicar en qué tengo conocimientos.',
        routerlink: 'devops',
        img_src: IMAGE_SRC.devops,
        img_alt: 'Imagen DevOps'
      }
    ]
};

export const ENGLISH_TRANSLATIONS: SkillsTranslation = {
  skills: [
    {
      title: 'Development methodologies',
      description: 'Here I explain methodologies that I used and are interesting.',
      routerlink: 'methodologies',
      img_src: IMAGE_SRC.agile,
      img_alt: 'SCRUM image'
    },
    {
      title: 'CleanCode & patterns',
      description: 'In this section are grouped my skills regarding the technical aspects of Software Engineering.',
      routerlink: 'ccpatterns',
      img_src: IMAGE_SRC.uml,
      img_alt: 'UML image'
    },
    {
      title: 'Frameworks',
      description: 'Here I value and try to explain my skills with each Framework I know.',
      routerlink: 'frameworks',
      img_src: IMAGE_SRC.framework,
      img_alt: 'Framework image'
    },
    {
      title: 'DevOps',
      description: 'I have been very interested in the contents of this section throughout my master\'s degree in Web Engineering. ' +
        'I try to explain what I have knowledge in.',
      routerlink: 'devops',
      img_src: IMAGE_SRC.devops,
      img_alt: 'DevOps image'
    }
  ]
};
