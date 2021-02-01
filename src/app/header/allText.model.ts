import {LANGUAGES} from '../shared/languages.model';

export interface Texts {
  type: LANGUAGES;
  header: string;
}

export const SPANISH_TEXTS: Texts = {
  type: LANGUAGES.SPANISH,
  header: 'Soy Rafa.',
};

export const ENGLISH_TEXTS: Texts = {
  type: LANGUAGES.ENGLISH,
  header: 'I am Rafa.',
};
