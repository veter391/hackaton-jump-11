/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import useQuestion from "../query/use-question";
import { Teacher } from "../../models/question/teacher.model";
import { format } from 'date-fns'

type Chat = {
    message: string;
    isAnswer: boolean;
    timestamp: Date;
}

type Props = {
    teacher: Teacher;
}

export default function useChat({ teacher }: Props) {
    const [chats, setChats] = useState<Chat[]>([]);

    const { isPending, mutate } = useQuestion();

    const addChat = (chat: Omit<Chat, 'timestamp'>) => {
        const _chats = chats;
        const newChat = {
            ...chat,
            timestamp: new Date(Date.now())
        } satisfies Chat;
        setChats([..._chats, newChat]);

        mutate({
            teacher,
            messages: _chats.map(({ timestamp: _, ...data }) => data)
        }, {
            onSuccess: ({answer}) => {
                setChats([..._chats, newChat, { message: answer, isAnswer: true, timestamp: new Date(Date.now()) }])
            }
        });
    }

    return {
        addChat,
        isLoading: isPending,
        chats: chats.map(({ timestamp, ...data}) => ({sendAt: format(timestamp, 'hh:mm'), ...data})),
    }
}