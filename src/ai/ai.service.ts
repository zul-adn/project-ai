import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionDto } from './dto/chat.dto';
import { ChatCompletionAssistantMessageParam } from 'openai/resources';

@Injectable()
export class AiService {
  constructor(private readonly openai: OpenAI) {}

  async createChat(messages: ChatCompletionDto[]) {
    // const text = body.content.toLowerCase();
    // const isGreeting = greetings.every((word) => text.includes(word));
    //
    // if (isGreeting) {
    //   return 'Hai, what subject you want to train?';
    // }
    //

    return this.openai.chat.completions.create({
      messages: messages as ChatCompletionAssistantMessageParam[],
      model: 'gpt-3.5-turbo',
    });
  }
}
