export interface MethodologiesTranslation {
  methodologies: {
    header: string;
    rup: {
      header: string;
      paragraph: string;
      paragraph_2: string;
    }
    scrum: {
      header: string;
      paragraph: string;
      paragraph_2: string;
    }
  };
}

export const SPANISH_TRANSLATIONS: MethodologiesTranslation = {
  methodologies: {
    header: 'Metodologías de desarrollo',
    rup: {
      header: 'RUP',
      paragraph: 'Se trata de una metodología pesada pero apta para cualquier proyecto. En esta metodología se le da ' +
        '         un peso importante a la documentación, para dejar claro en todo momento qué hay que desarrollar.',
      paragraph_2: 'Esta metodología la he puesto en práctica en el máster en Ingeniería Web'
    },
    scrum: {
      header: 'Scrum',
      paragraph: 'Se trata de una metodología ágil que es apta para proyectos pequeños / medianos.',
      paragraph_2: 'Esta metodología la puse en práctica en el transcurso del grado en Diseño y Desarrollo de videojuegos.\n' +
        '    Sin embargo, en el máster en Ingeniería web es donde realmente aprendí para qué y cuando usar este tipo de \n' +
        '    metodologías.'
    },
  }
};

export const ENGLISH_TRANSLATIONS: MethodologiesTranslation = {
  methodologies: {
    header: 'Development methodologies',
    rup: {
      header: 'RUP',
      paragraph: 'It\'s a heavy methodology that fits into any project. In this methodology it\'s very important the documentation, ' +
        '         it\'s written in every moment what have the team to develop.',
      paragraph_2: 'I used this methodology in Web Engineering Master\'s degree'
    },
    scrum: {
      header: 'Scrum',
      paragraph: 'It\'s an agile methodology that fits into small / medium projects.',
      paragraph_2: 'I used this methodology in Videogames Design and Development. However, in Web Engineering Master\'s degree \n' +
        '     is when I really learnt about where and when to use these types of methodologies.'
    },
  }
};
