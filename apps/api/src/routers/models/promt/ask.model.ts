import { TeacherType } from "./teacher-type.enum";

export interface Ask {
    name: string;
    lastName: string;
    teacherType: TeacherType;
    locality: string;
    studentsAmount: number;
    averageStudentsAge: number;
}