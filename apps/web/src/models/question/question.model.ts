import { Teacher } from "./teacher.model";

export interface Question {
    teacher: Teacher;
    messages: {
        content: string;
        role: 'assistant' | 'user';
    }[];
}