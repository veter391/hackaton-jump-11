import { useFormContext } from "../hooks/query/use-form-context";
import { Teacher } from "../models/question/teacher.model"
import Chat from "./Chat";

type Props = {
    teacher: Teacher;
}

export default function TeacherContext({ teacher }: Props) {

    const { data, isLoading } = useFormContext({formValues: teacher});

    if (isLoading || !data) return null;

    return <Chat initialPrompt={data.answer} teacher={teacher}/>
}