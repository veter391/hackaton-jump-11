/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import useQuestion from "../query/use-question";
import { format } from 'date-fns'

type Chat = {
    message: string;
    isAnswer: boolean;
    timestamp: Date;
}

type Props = {
    initialChats: [Chat, Chat];
}

export default function useChat({ initialChats }: Props) {
    const [chats, setChats] = useState<Chat[]>(initialChats);

    const { isPending, mutate } = useQuestion();

    useEffect(() => {
        // Initial mutate
        sendChats(initialChats);
    }, []);

    const addChat = (chat: Omit<Chat, 'timestamp'>) => {
        const _chats = chats;
        const newChat = {
            ...chat,
            timestamp: new Date(Date.now())
        } satisfies Chat;
        // Update state
        setChats([..._chats, newChat]);

        // Call mutate
        sendChats([..._chats, newChat]);
    }

    const sendChats = (_chats: Chat[]) => {
        mutate({
            messages: _chats.map(({ timestamp: _, message, isAnswer }) => ({
                content: message ?? '',
                role: isAnswer ? 'assistant' : 'user'
            }))
        }, {
            onSuccess: ({answer}) => {
                setChats([..._chats, { message: answer, isAnswer: true, timestamp: new Date(Date.now()) }].filter(c => c))
            }
        });
    }

    return {
        addChat,
        isLoading: isPending,
        chats: chats.filter((_,i) => i >= 2).map(({ timestamp, ...data}) => ({sendAt: format(timestamp, 'HH:mm'), ...data})),
    }
}