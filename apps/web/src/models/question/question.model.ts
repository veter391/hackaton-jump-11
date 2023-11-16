import { Teacher } from "./teacher.model";

export interface Question {
    teacher: Teacher;
    messages: { message: string, isAnswer: boolean }[];
}