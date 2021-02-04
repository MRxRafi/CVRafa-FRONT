export interface ContactTranslation {
  contact: {
    header: string;
    subheader: string;
    paragraph: string;
  };
}

export const SPANISH_TRANSLATIONS: ContactTranslation = {
  contact: {
    header: 'Ponte en Contacto',
    subheader: '¿Te gusta el café tanto como a mí?',
    paragraph: 'Simplemente podemos trabajar con un maravilloso café natural codo\n' +
      '      con codo. ¿A qué estás esperando? ¡Contáctame!'
  }
};

export const ENGLISH_TRANSLATIONS: ContactTranslation = {
  contact: {
    header: 'Contact Me',
    subheader: 'Do you like coffee as much as I do?',
    paragraph: 'We can simply work with a wonderful natural coffee side by side.' +
      ' What are you waiting for? Contact me!'
  }
};
