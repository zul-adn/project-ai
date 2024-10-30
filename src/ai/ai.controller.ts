import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { ChatDto } from './dto/chat.dto';

const format = {
  id: 'uuid-v4',
  question: 'string',
  choices: [
    {
      id: 'uuid-v4',
      text: 'string',
    },
    {
      id: 'uuid-v4',
      text: 'string',
    },
    {
      id: 'uuid-v4',
      text: 'string',
    },
    {
      id: 'uuid-v4',
      text: 'string',
    },
  ],
  answer: 'uuid-v4',
  explanation: 'string',
};

const messages = [
  {
    role: 'user',
    content: `can you generate 2 questions about aws cloud practioner exam with multiple choises and generate it to json string following this schema ${JSON.stringify(format)}, give me array object response`,
  },
];

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post('chat')
  async createChat(@Body() body: ChatDto) {
    // return this.aiService.createChat(messages);
    console.log(body.messages);
    const questions = await this.aiService.createChat(messages);
    console.log(questions.choices[0].message.content);
    console.log(JSON.stringify(questions.choices[0].message.content));
    return questions.choices[0].message.content;
  }
}
