import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ChatDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ChatCompletionDto)
  messages: ChatCompletionDto[];
}

export class ChatCompletionDto {
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
