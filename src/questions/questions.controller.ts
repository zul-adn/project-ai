import { Body, Controller, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionDto } from './dto/questions.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('create')
  async createQuestion(@Body() body: QuestionDto) {
    return this.questionsService.createQuestion(body);
  }
}
