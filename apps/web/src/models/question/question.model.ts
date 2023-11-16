export interface Question {
    messages: {
        content: string;
        role: 'assistant' | 'user';
    }[];
}