import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Questions } from './schema/questions.schema';
import { QuestionDto } from './dto/questions.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Questions.name)
    private readonly questionModel: Model<Questions>,
  ) {}

  async createQuestion(question: QuestionDto) {
    // @ts-expect-error
    await new this.questionModel.create(question).save();
  }
}
