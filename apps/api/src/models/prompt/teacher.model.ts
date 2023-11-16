import { TeacherType } from "./teacher-type.enum";

export interface Teacher {
    name: string;
    lastName: string;
    teacherType: TeacherType;
    locality: string;
    districtCode: string;
    neighborhoodCode: string;
    studentsAmount: number;
    averageStudentsAge: number;
}