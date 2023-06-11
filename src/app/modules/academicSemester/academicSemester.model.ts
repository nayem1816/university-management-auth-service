import mongoose from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constant';
import status from 'http-status';
import ApiError from '../../../errors/ApiError';

const AcademicSemesterSchema = new mongoose.Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCodes,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
  },
  {
    timestamps: true,
  }
);

AcademicSemesterSchema.pre('save', async function (next) {
  const isExit = await AcademicSemester.findOne({
    code: this.code,
    year: this.year,
  });

  if (isExit) {
    throw new ApiError(status.CONFLICT, 'This Semester title already exist');
  }
  next();
});

export const AcademicSemester = mongoose.model<
  IAcademicSemester,
  AcademicSemesterModel
>('AcademicSemester', AcademicSemesterSchema);
