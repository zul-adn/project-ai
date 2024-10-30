import { Module } from '@nestjs/common';
import { AiModule } from './ai/ai.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AiModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
