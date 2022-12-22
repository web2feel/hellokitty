import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: process.env.ORG,
    apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);
