const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.getAIResponse = async (message) => {
    const response = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: [{ role: 'user', content: message }],
    });
    return response.data.choices[0].message.content;
};
