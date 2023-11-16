import { useMutation } from '@tanstack/react-query';
import { API } from '../../services/networking/api';
import { Question } from '../../models/question/question.model';

export default function useQuestion() {
    return useMutation({
        mutationFn: async (question: Question) => {
            return await API<{answer: string}>('/ask', 'POST', question);
        },
        mutationKey: ['ask']
    })
}