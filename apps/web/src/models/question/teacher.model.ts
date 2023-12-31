export enum TeacherType {
    ESO = 'ESO',
    PRIMARIA = 'Primaria',
}
export interface Teacher {
    name: string;
    teacherType: TeacherType;
    locality: string;
    districtCode: string;
    neighborhoodCode: string;
    studentsAmount: number;
    averageStudentsAge: number;
}