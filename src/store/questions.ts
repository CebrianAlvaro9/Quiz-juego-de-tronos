import { create } from "zustand";
import { type Question } from "../types";
import confetti from "canvas-confetti";
interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: () => Promise<void>;
  setCurrentQuestion: (type: string) => void;
  setResults: (indexAnswer: number) => void;
  reset: () => void;
}

export const useQuestionStore = create<State>((set, get) => ({
  questions: [],
  currentQuestion: 0,
  fetchQuestions: async () => {
    const response = await fetch("../public/quiz.json");
    const data = await response.json();
    set({ questions: data.questions.sort(() => 0.5 - Math.random()) });
  },

  setCurrentQuestion: (type: string) => {
    const { currentQuestion, questions } = get();
    if (type === "next" && currentQuestion < questions.length - 1) {
      set({ currentQuestion: currentQuestion + 1 });
    } else if (type === "previous" && currentQuestion > 0) {
      set({ currentQuestion: currentQuestion - 1 });
    }
  },

  setResults: (indexAnswer: number) => {
    const { currentQuestion, questions } = get();
    const newQuestions = structuredClone(questions);
    const info = newQuestions[currentQuestion];
    const userSelectedAnswer = info.options[indexAnswer];
    const isCorrectUserAnswer = userSelectedAnswer === info.answer;

    if (isCorrectUserAnswer) confetti();
    newQuestions[currentQuestion] = {
      ...info,
      userSelectedAnswer,
      isCorrectUserAnswer,
    };
    set({ questions: newQuestions });
  },

  reset: () => set({ questions: [], currentQuestion: 0 }),
}));
