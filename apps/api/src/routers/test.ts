import OpenAI from 'openai';
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env?.OPENAI_SK ?? ''
});

export async function callChatGPT() {
    const stream = await openai.beta.chat.completions.stream({
        model: 'gpt-4',
        messages: [{ role: 'user', content: 'I want you to say: "Jowo this is a test"' }],
        stream: true,
    });

    // or, equivalently:
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || '');
    }

    const chatCompletion = await stream.finalChatCompletion();
    return chatCompletion; // {id: "…", choices: […], …}
}