import { useQuery } from "@tanstack/react-query";
import { API } from "../../services/networking/api";
import { Teacher } from "../../models/question/teacher.model";

type Options = {
    formValues: Teacher;
}

export function useFormContext({ formValues }: Options) {
    return useQuery({
        queryKey: ['form-values'],
        queryFn: async () => {
            return await API<{ answer: string }>('/loadContext', 'POST', formValues);
        }
    })
}