import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionDto } from './dto/chat.dto';
import { ChatCompletionAssistantMessageParam } from 'openai/resources';

@Injectable()
export class AiService {
  constructor(private readonly openai: OpenAI) {}

  async createChat(messages: ChatCompletionDto[]) {
    return this.openai.chat.completions.create({
      messages: messages as ChatCompletionAssistantMessageParam[],
      model: 'gpt-3.5-turbo',
    });
  }
}
