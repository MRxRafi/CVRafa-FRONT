import {DATA_MOCK, FrameworkModel, NAME_SECTION, WORK_SECTION} from './framework.model';

export interface FrameworksTranslation {
  frameworks: {
    sections: {
      header: string;
      cards: FrameworkModel[];
    }[];
    knowledge: string;
    experienceYears: string;
  };
}

export const SPANISH_TRANSLATIONS: FrameworksTranslation = {
  frameworks: {
    sections: [
      {
        header: NAME_SECTION[1],
        cards: [
          {
            description: 'El framework que más conozco al haberlo usado durante el grado y el máster',
            data: DATA_MOCK[0]
          },
          {
            description: 'Tecnología aprendida durante el máster. Utilizado en este proyecto',
            data: DATA_MOCK[1]
          },
        ]
      },
      {
        header: NAME_SECTION[0],
        cards: [
          {
            description: 'Tecnología aprendida durante el grado y máster. Conocimientos en Data Binding, Directivas, ' +
              'comunicación de componentes, Pipes, Enrutamiento, Observer, Servicios... Utilizado en este proyecto',
            data: DATA_MOCK[2]
          },
          {
            description: 'Tecnología aprendida durante el máster. Nociones de interfaces, bases de datos y conexión con la nube',
            data: DATA_MOCK[3]
          },
          {
            description: 'Tecnología aprendida durante un erasmus a Finlandia y durante las prácticas de grado. Nociones básicas',
            data: DATA_MOCK[4]
          }
        ]
      }
    ],
    knowledge: 'Conocimiento: ',
    experienceYears: 'Años de experiencia: '
  }
};

export const ENGLISH_TRANSLATIONS: FrameworksTranslation = {
  frameworks: {
    sections: [
      {
        header: NAME_SECTION[1],
        cards: [
          {
            description: 'The framework I know best, having used it during my undergraduate and master\'s degree.',
            data: DATA_MOCK[0]
          },
          {
            description: 'Technology learned during the master\'s degree. Used in this project.',
            data: DATA_MOCK[1]
          },
        ]
      },
      {
        header: NAME_SECTION[0],
        cards: [
          {
            description: 'Technology learned during the degree and master\'s degree. Knowledge in Data Binding, ' +
              'Directives, component communication, Pipes, Routing, Observer, Services... Used in this project',
            data: DATA_MOCK[2]
          },
          {
            description: 'Technology learned during the master\'s degree. Notions of interfaces, databases and connection to the cloud.',
            data: DATA_MOCK[3]
          },
          {
            description: 'Technology learned during an Erasmus in Finland and during undergraduate internships. Basic notions',
            data: DATA_MOCK[4]
          }
        ]
      }
    ],
    knowledge: 'Knowledge: ',
    experienceYears: 'Experience years: '
  }
};
