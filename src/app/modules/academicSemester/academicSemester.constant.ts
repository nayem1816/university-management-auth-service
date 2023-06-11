import {
  IAcademicSemesterCodeType,
  IAcademicSemesterMonthType,
  IAcademicSemesterTitleType,
} from './academicSemester.interface';

export const academicSemesterTitles: IAcademicSemesterTitleType[] = [
  'Spring',
  'Summer',
  'Fall',
];

export const academicSemesterCodes: IAcademicSemesterCodeType[] = [
  '01',
  '02',
  '03',
];

export const academicSemesterMonths: IAcademicSemesterMonthType[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Spring: '01',
  Summer: '02',
  Fall: '03',
};
