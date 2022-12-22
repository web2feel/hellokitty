// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { openai } from "../../utils/openai"

export default async function handler(req, res) {

  try {
    let prompt = `Pretend you are a cat. Answer with cat mannerisms.
    Person: How are you?
    You: I am going to take a nap on this sofa.
    Person: ${req.body}
    You:`
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 25,
      temperature: 0,
    });
    let message = response.data?.choices[0]?.text 
    res.status(200).json(message)
  } catch (error) {
    res.status(error.response.status).send(error.response.data)
  }
}
