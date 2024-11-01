import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import OpenAI from 'openai';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QuestionsService } from '../questions/questions.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Questions,
  QuestionsSchema,
} from '../questions/schema/questions.schema';

@Module({
  controllers: [AiController],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Questions.name,
        schema: QuestionsSchema,
      },
    ]),
  ],
  providers: [
    AiService,
    QuestionsService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) =>
        new OpenAI({ apiKey: configService.getOrThrow('OPENAI_KEY') }),
      inject: [ConfigService],
    },
  ],
})
export class AiModule {}
