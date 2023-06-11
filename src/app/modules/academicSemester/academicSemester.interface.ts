import { Model } from 'mongoose';

export type IAcademicSemesterTitleType = 'Spring' | 'Summer' | 'Fall';

export type IAcademicSemesterCodeType = '01' | '02' | '03';

export type IAcademicSemesterMonthType =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemester = {
  title: IAcademicSemesterTitleType;
  year: number;
  code: IAcademicSemesterCodeType;
  startMonth: IAcademicSemesterMonthType;
  endMonth: IAcademicSemesterMonthType;
};

export type AcademicSemesterModel = Model<IAcademicSemester>;
