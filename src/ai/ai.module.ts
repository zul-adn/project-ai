import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import OpenAI from 'openai';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  controllers: [AiController],
  imports: [ConfigModule],
  providers: [
    AiService,
    {
      provide: OpenAI,
      useFactory: (configService: ConfigService) => new OpenAI({ "apiKey": configService.getOrThrow('OPENAI_KEY')}),
      inject: [ConfigService],
    },
  ],
})
export class AiModule {}
