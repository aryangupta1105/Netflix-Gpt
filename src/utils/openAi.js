import OpenAI from 'openai';
import { openAi_api_key, openAi_api_key_akshay } from './constants';

const openai = new OpenAI({
  apiKey: openAi_api_key, // This is the default and can be omitted
  dangerouslyAllowBrowser : true,
});

export default openai;