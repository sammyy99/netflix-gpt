import OpenAI from 'openai';
import { GPT_API_Key } from './urls';

const openai = new OpenAI({
  apiKey: process.env[GPT_API_Key],
});

export default openai;