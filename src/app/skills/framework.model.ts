export interface FrameworkModel {
  section: SECTION;
  title: string;
  score: number;
  experienceYears: number;
  description: string;
}

enum SECTION {
  BACK_END,
  FRONT_END
}

export const MOCK: FrameworkModel[] = [
  {
    section: SECTION.BACK_END,
    title: 'Spring',
    score: 4,
    experienceYears: 2,
    description: 'El framework que más conozco al haberlo usado durante el grado y el máster'
  },
  {
    section: SECTION.BACK_END,
    title: 'Symfony',
    score: 3,
    experienceYears: 1,
    description: 'Tecnología aprendida durante el máster. Utilizado en este proyecto'
  },
  {
    section: SECTION.FRONT_END,
    title: 'Angular',
    score: 3.5,
    experienceYears: 1.5,
    description: 'Tecnología aprendida durante el grado y máster. Utilizado en este proyecto'
  },
  {
    section: SECTION.FRONT_END,
    title: 'Android Studio',
    score: 2.5,
    experienceYears: 0.5,
    description: 'Tecnología aprendida durante el máster. Nociones de interfaces, bases de datos y conexión con la nube'
  },
  {
    section: SECTION.FRONT_END,
    title: 'React',
    score: 1,
    experienceYears: 0.5,
    description: 'Tecnología aprendida durante un erasmus a Finlandia. Nociones básicas'
  },
];
