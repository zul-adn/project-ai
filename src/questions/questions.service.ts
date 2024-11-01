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
    await this.questionModel
      .insertMany(question)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // return await new this.questionModel(question[0]).save();
  }
}
