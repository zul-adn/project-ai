import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Questions, QuestionsSchema } from './schema/questions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Questions.name,
        schema: QuestionsSchema,
      },
    ]),
  ],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
