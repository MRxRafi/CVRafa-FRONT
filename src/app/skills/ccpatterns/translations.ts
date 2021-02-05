export interface CCPatternTranslation {
  ccpatterns: {
    header: string;
    aboutSoftware: {
      header: string;
      paragraph: string;
    }
    qualityAndPatterns: {
      header: string;
      paragraphs: string[];
    }
    howIWork: {
      header: string;
      paragraphs: string[];
    }
  };
}

export const SPANISH_TRANSLATIONS: CCPatternTranslation = {
  ccpatterns: {
    header: 'Código limpio y patrones',
    aboutSoftware: {
      header: 'Sobre el Software',
      paragraph: 'Cualquier buen desarrollador sabe que el Software construido a través de código de baja calidad no es mantenible.\n' +
        '      La forma en la que trabajo se basa en revisar continuamente el código para detectar anomalías, mejorar la calidad\n' +
        '      teniendo en cuenta las buenas prácticas y diseñar en base a patrones.'
    },
    qualityAndPatterns: {
      header: 'Calidad del Software y patrones',
      paragraphs: [
        'KISS, YAGNI, SOLID.. Detectar y evitar código sucio... Son las prácticas que intento llevar a cabo.',
        'MVC, Técnica del doble despacho, Patrón prototipo... Son algunos de los patrones que otorgan solución a los\n' +
        '      problemas más comunes.'
      ],
    },
    howIWork: {
      header: '¿Cómo trabajo?',
      paragraphs: [
        '\'Intento\' aplicar todas las reglas de calidad del Software y evitar el código sucio e \'intento\' diseñar\n' +
        '      en base a patrones.',
        '¿Por qué digo \'intento\'? Simplemente porque no tengo tanta experiencia como para que no se me escapen algunas cosas\n' +
        '      o para hacer el diseño perfecto. Es a lo que quiero llegar.',
        'Si queréis conocer con detalle los conocimientos que poseo, podemos tener una entrevista técnica.'
      ]
    }
  }
};

export const ENGLISH_TRANSLATIONS: CCPatternTranslation = {
  ccpatterns: {
    header: 'Clean Code & Patterns',
    aboutSoftware: {
      header: 'About Software',
      paragraph: 'Any good developer knows that software built through low quality code is not maintainable.\n' +
        'The way I work is based on continuously reviewing the code for anomalies, ' +
        'improving quality by taking into consideration best practices and designing based on patterns.'
    },
    qualityAndPatterns: {
      header: 'Software quality & patterns',
      paragraphs: [
        'KISS, YAGNI, SOLID... Detect and avoid dirty code... These are the practices I try to carry out.',
        'MVC, Double dispatching technique, Prototype pattern... These are some of the patterns that ' +
        'provide solutions to the most common problems.'
      ],
    },
    howIWork: {
      header: 'How do I work?',
      paragraphs: [
        'I \'try\' to apply all software quality rules and avoid dirty code and \'try\' to design based on patterns.',
        'Why do I say \'try\'? Simply because I\'m not experienced enough to not miss some things or to make the perfect design.' +
        ' That\'s what I\'m getting at.',
        'If you want to know in detail the knowledge I have, we can have a technical interview.'
      ]
    }
  }
};
