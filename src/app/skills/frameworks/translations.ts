import {FrameworkModel, NAME_SECTION} from './framework.model';

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
        header: NAME_SECTION[0],
        cards: [
          {
            description: 'Tecnología aprendida durante el grado y máster. Conocimientos en Data Binding, Directivas, ' +
              'comunicación de componentes, Pipes, Enrutamiento, Observer, Servicios... Utilizado en este proyecto',
            data: {
              name: "Angular",
              experienceYears: 2.5
            }
          },
          {
            description: 'Tecnología aprendida durante un erasmus a Finlandia y durante las prácticas de grado. Nociones básicas',
            data: {
              name: "React",
              experienceYears: 0.5
            }
          }
        ]
      },
      {
        header: NAME_SECTION[1],
        cards: [
          {
            description: 'El framework que más conozco al haberlo usado durante el grado y el máster',
            data: {
              name: "Spring (Java)",
              experienceYears: 2
            }
          },
          {
            description: 'Nociones básicas. Framework usado en un proyecto de asignatura en el transcurso del máster',
            data: {
              name: "FastAPI (Python)",
              experienceYears: 0.5
            }
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
        header: NAME_SECTION[0],
        cards: [
          {
            description: 'Technology learned during the degree and master\'s degree. Knowledge in Data Binding, ' +
              'Directives, component communication, Pipes, Routing, Observer, Services... Used in this project',
              data: {
                name: "Angular",
                experienceYears: 2.5
              }
          },
          {
            description: 'Technology learned during an Erasmus in Finland and during undergraduate internships. Basic notions',
            data: {
              name: "React",
              experienceYears: 0.5
            }
          }
        ]
      },
      {
        header: NAME_SECTION[1],
        cards: [
          {
            description: 'The framework I know best, having used it during my undergraduate and master\'s degree.',
            data: {
              name: "Spring (Java)",
              experienceYears: 2
            }
          },
          {
            description: 'Framework used in master\'s degree',
            data: {
              name: "FastAPI (Python)",
              experienceYears: 0.5
            }
          }
        ]
      }
    ],
    knowledge: 'Knowledge: ',
    experienceYears: 'Experience years: '
  }
};
