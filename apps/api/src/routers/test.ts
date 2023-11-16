import OpenAI from 'openai';
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env?.OPENAI_SK ?? ''
});

export async function callChatGPT(prevMessages) {
    const stream = await openai.beta.chat.completions.stream({
        model: 'gpt-4',
        messages: prevMessages,
        stream: true,
    });

    // or, equivalently:
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || '');
    }

    const chatCompletion = await stream.finalChatCompletion();
    // @ts-ignore
    return chatCompletion?.choices[0].message.content ?? ''; // {id: "…", choices: […], …}
}