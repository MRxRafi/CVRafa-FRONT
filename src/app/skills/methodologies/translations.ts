export interface MethodologiesTranslation {
  methodologies: {
    header: string;
    rup: {
      header: string;
      paragraph: string;
    }
    scrum: {
      header: string;
      paragraph: string;
    }
  };
}

export const SPANISH_TRANSLATIONS: MethodologiesTranslation = {
  methodologies: {
    header: 'Metodologías de desarrollo',
    rup: {
      header: 'RUP',
      paragraph: 'Se trata de una metodología pesada pero apta para cualquier proyecto. En esta metodología se le da ' +
        '         un peso importante a la documentación, para dejar claro en todo momento qué hay que desarrollar.'
    },
    scrum: {
      header: 'Scrum',
      paragraph: 'Se trata de una metodología ágil que es apta para proyectos pequeños / medianos.'
    },
  }
};

export const ENGLISH_TRANSLATIONS: MethodologiesTranslation = {
  methodologies: {
    header: 'Development methodologies',
    rup: {
      header: 'RUP',
      paragraph: 'It\'s a heavy methodology that fits into any project. In this methodology it\'s very important the documentation, ' +
        '         it\'s written in every moment what have the team to develop.'
    },
    scrum: {
      header: 'Scrum',
      paragraph: 'It\'s an agile methodology that fits into small / medium projects.'
    },
  }
};
