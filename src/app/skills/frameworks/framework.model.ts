export interface Data {
  title: string;
  section: WORK_SECTION;
  score: number;
  experienceYears: number;
}

export interface FrameworkModel {
  description: string;
  data: Data;
}


export enum WORK_SECTION {
  FRONT_END,
  BACK_END
}

export const NAME_SECTION: string[] = [
  'Front End',
  'Back End'
];

export const DATA_MOCK: Data[] = [
  {
    title: 'Spring',
    section: WORK_SECTION.BACK_END,
    score: 4,
    experienceYears: 2
  },
  {
    title: 'Symfony',
    section: WORK_SECTION.BACK_END,
    score: 3,
    experienceYears: 1
  },
  {
    title: 'Angular',
    section: WORK_SECTION.FRONT_END,
    score: 3.5,
    experienceYears: 1.5
  },
  {
    title: 'Android Studio',
    section: WORK_SECTION.FRONT_END,
    score: 2.5,
    experienceYears: 0.5
  },
  {
    title: 'React',
    section: WORK_SECTION.FRONT_END,
    score: 2,
    experienceYears: 0.5
  }
];
