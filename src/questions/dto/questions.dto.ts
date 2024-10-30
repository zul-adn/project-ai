import { IsNotEmpty, IsString } from 'class-validator';

export class QuestionDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsString()
  @IsNotEmpty()
  choices: string;

  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsString()
  @IsNotEmpty()
  explanation: string;

  @IsString()
  @IsNotEmpty()
  context: string;
}
