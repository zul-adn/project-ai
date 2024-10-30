import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class Questions {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ unique: true })
  question: string;

  @Prop()
  answer: string;

  @Prop()
  explanation: string;

  @Prop()
  context: string;

  @Prop()
  choices: string;
}

export const QuestionsSchema = SchemaFactory.createForClass(Questions);
