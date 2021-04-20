export interface Framework {
  id?: number;
  name: string;
  frameworkType: string;
  knowledge: number;
  experienceYears: number;
}

export interface FrameworkModel {
  description: string;
  data?: Framework;
}

export const NAME_SECTION: string[] = [
  'Front End',
  'Back End'
];
