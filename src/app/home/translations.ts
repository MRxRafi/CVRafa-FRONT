export interface HomeTranslations {
  landscape: {
    header: string,
    subheader: string
  };
  welcome: {
    header: string;
    paragraph: string;
  };
  journey: {
    header: string;
    summary: {
      header: string;
      paragraph: string;
    };
    studies: {
      header: string;
      paragraph: string;
      table: {
        caption: string;
        headers: {
          title: string;
          place: string;
          score: string;
          date: string;
        };
        rows: {
          title: string;
          place: string;
          score: number;
          date: string;
        }[]
      };
    };
    internship: {
      header: string;
      paragraphs: string[];
    };
  };
}

export const SPANISH_TRANSLATIONS: HomeTranslations = {
  landscape: {
    header: 'Soy Rafa',
    subheader: 'un ingeniero web'
  },
  welcome: {
    header: 'Hola.',
    paragraph: 'Soy un ingeniero web en proceso. Comencé a interesarme en desarrollo web full-stack\n' +
      '    en un erasmus que hice en Finlandia a final de 2019, donde aprendí React.\n' +
      '    Ahora, como consecuencia de haber estado allí, soy un defensor aférrimo\n' +
      '    del café natural.'
  },
  journey: {
    header: 'Trayecto',
    summary: {
      header: 'Resumen',
      paragraph: 'Comencé a interesarme por la programación en general desde que era un\n' +
        '        niño, prácticamente desde la ESO. Aprendí poco a poco, finalmente\n' +
        '        decantándome por el Diseño y Desarrollo de Videojuegos. Ahí aprendí\n' +
        '        bastante Back-End y mucha programación. En el Erasmus que hice en Finlandia\n' +
        '        descubrí que hay más futuro en la industria web y que estaba mucho más\n' +
        '        asentada. Le cogí el gusto y comencé por ese camino. Actualmente estoy\n' +
        '        cursando un máster en Ingeniería Web, en la Universidad Politécnica de Madrid.'
    },
    studies: {
      header: 'Estudios',
      paragraph: 'A continuación expongo con detalle la trayectoria de mis estudios:',
      table: {
        caption: '(*) Todavía estoy cursando este máster. La nota media es la obtenida hasta el momento.',
        headers: {
          title: 'Título',
          place: 'Centro',
          score: 'Nota media',
          date: 'Duración'
        },
        rows: [
          {
            title: 'Bachillerato',
            place: 'IES Cañada Real',
            score: 6.8,
            date: '2014-2016'
          },
          {
            title: 'Grado en Diseño y Desarrollo de Videojuegos',
            place: 'Universidad Rey Juan Carlos',
            score: 7.85,
            date: '2016-2020'
          },
          {
            title: 'Máster en Ingeniería Web(*)',
            place: 'Universidad Politécnica de Madrid',
            score: 9,
            date: '2020-2021'
          },
        ]
      }
    },
    internship: {
      header: 'Prácticas externas / Beca',
      paragraphs: [
        'Las prácticas externas que tuvieron lugar al final del grado las hice en una empresa en la que\n' +
        '        aprendí conceptos principales del desarrollo web. Tuve un primer contacto con el framework Angular\n' +
        '        y continué desarrollando conceptos de la librería React. También estuve en contacto con la parte de\n' +
        '        Back-End en Spring, sin embargo, las prácticas tuvieron que ser interrumpidas en marzo de 2020 debido\n' +
        '        a la crisis del coronavirus.',
        'Durante el transcurso del Máster en Ingeniería Web me apunté a una beca en la que tuve que trabajar\n' +
        '        los fundamentos del código limpio y patrones desde octubre del 2020. Finalizo en junio de 2021.'
      ]
    }
  }
};

export const ENGLISH_TRANSLATIONS: HomeTranslations = {
  landscape: {
    header: 'I\'m Rafa',
    subheader: 'a web engineer'
  },
  welcome: {
    header: 'Hi.',
    paragraph: 'I\'m about to be web engineer. My interest in full-stack web development started in\n' +
      '    an Erasmus done in Finland, in final of 2019 where I learnt React.\n' +
      '    Now, because of having been there, I\'m a big coffee lover.'
  },
  journey: {
    header: 'Journey',
    summary: {
      header: 'Summary',
      paragraph: 'My interest in programming in general started when I was a kid,\n' +
        '        at high school. I learnt little by little, finally going through a\n' +
        '        degree in video games design and development. There I learnt\n' +
        '        a lot of Back-End and a lot of programming. During Finland Erasmus I discovered that\n' +
        '        web industry has more future and is more settled. I liked it, so I decided to start in that path.\n' +
        '        Nowadays I am studying a Master in Web engineering in Polytechnics Madrid University.'
    },
    studies: {
      header: 'Studies',
      paragraph: 'Below I present in detail the path of my studies:',
      table: {
        caption: '(*) I am currently studying this master. Average score is the one obtained so far.',
        headers: {
          title: 'Degree',
          place: 'Place',
          score: 'Average score',
          date: 'Date'
        },
        rows: [
          {
            title: 'High School',
            place: 'IES Cañada Real',
            score: 6.8,
            date: '2014-2016'
          },
          {
            title: 'Degree in video game design and development',
            place: 'Rey Juan Carlos University',
            score: 7.85,
            date: '2016-2020'
          },
          {
            title: 'Web Engineering Master(*)',
            place: 'Polytechnic University of Madrid',
            score: 9,
            date: '2020-2021'
          },
        ]
      }
    },
    internship: {
      header: 'Internships',
      paragraphs: [
        'The internship that took place at the end of the degree I did in a company where I learned\n' +
        '        the main concepts about web development. I had a first contact with framework Angular\n' +
        '        and I developed concepts about React library. I also have been in contact with Back-End part\n' +
        '        in Spring framework, however, the internship had to be interrupted in March 2020 due to\n' +
        '        the coronavirus crisis.',
        'During the course of the Master in Web Engineering I signed up for a internship in which I had to work\n' +
        '        the fundamentals of clean code and patterns since October 2020. It ends in June 2021.'
      ]
    }
  }
};
