export class Choices {
  id: string;
  text: string;
}

export class QuestionDto {
  question: string;
  choices: Choices[];
  answer: string;
  explanation: string;
  context: string;
}
