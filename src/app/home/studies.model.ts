export interface StudyRow {
  title: string;
  place: string;
  score: number;
  date: string;
}

export const STUDIES: StudyRow[] = [
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
];
