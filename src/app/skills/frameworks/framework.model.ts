export interface FrameworkModel {
  section: WORK_SECTION;
  title: string;
  score: number;
  experienceYears: number;
  description: string;
}

export enum WORK_SECTION {
  FRONT_END,
  BACK_END
}

export const NAME_SECTION: string[] = [
  'Front End',
  'Back End'
];

export const MOCK: FrameworkModel[] = [
  {
    section: WORK_SECTION.BACK_END,
    title: 'Spring',
    score: 4,
    experienceYears: 2,
    description: 'El framework que más conozco al haberlo usado durante el grado y el máster'
  },
  {
    section: WORK_SECTION.BACK_END,
    title: 'Symfony',
    score: 3,
    experienceYears: 1,
    description: 'Tecnología aprendida durante el máster. Utilizado en este proyecto'
  },
  {
    section: WORK_SECTION.FRONT_END,
    title: 'Angular',
    score: 3.5,
    experienceYears: 1.5,
    description: 'Tecnología aprendida durante el grado y máster. Utilizado en este proyecto'
  },
  {
    section: WORK_SECTION.FRONT_END,
    title: 'Android Studio',
    score: 2.5,
    experienceYears: 0.5,
    description: 'Tecnología aprendida durante el máster. Nociones de interfaces, bases de datos y conexión con la nube'
  },
  {
    section: WORK_SECTION.FRONT_END,
    title: 'React',
    score: 1,
    experienceYears: 0.5,
    description: 'Tecnología aprendida durante un erasmus a Finlandia. Nociones básicas'
  },
];
