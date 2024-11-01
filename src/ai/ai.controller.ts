import { Body, Controller, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { ChatDto } from './dto/chat.dto';
import { QuestionsService } from '../questions/questions.service';

const format = {
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
  context: 'string',
  explanation: 'string',
};

const message = (key: string) => {
  return `generate 5 questions for ${key} examination with multiple chooses and generate it into following schema ${JSON.stringify(format)}, give me array of object with json format, just give me the json without any words`;
  // return `buatkan 2 soal untuk ujian skb cpns dengan mengikuti format ini ${JSON.stringify(format)}, dan berikan saya array of object dengan json format, berikan saya json saja, tanpa kata kata lainnya`;
};

const greetings = [
  'hai',
  'hello',
  'hai!',
  'hello!',
  'halo',
  'halo!',
  'hi',
  'hi!',
];

@Controller('ai')
export class AiController {
  constructor(
    private readonly aiService: AiService,
    private readonly questionsService: QuestionsService,
  ) {}

  @Post('chat')
  async createChat(@Body() body: any) {
    const text = body.content.toLowerCase();
    const isGreeting = greetings.every((word) => text.includes(word));

    if (isGreeting) {
      return 'Hai, what subject you want to train?';
    }

    const generatedQuestion = await this.aiService.createChat([
      {
        role: 'user',
        content: message(body.content),
      },
    ]);
    const questions = generatedQuestion.choices[0].message.content;
    const result = questions.replace(/.*?```json*(.*?)```.*?/, '$1');
    await this.questionsService.createQuestion(JSON.parse(result));
    // return JSON.parse(result);
  }
}
