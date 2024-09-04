export interface Quiz {
  quizTitle: string;
  quizDescription: string;
  questions: Question[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  userSelectedAnswer?: string;
  isCorrectUserAnswer?: boolean;
}
