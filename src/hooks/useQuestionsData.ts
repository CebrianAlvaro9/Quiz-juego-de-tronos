import { useQuestionStore } from "../store/questions";

export const useQuestionsData = () => {
  const { questions } = useQuestionStore();

  const correct = questions.filter((q) => q.isCorrectUserAnswer).length;
  const unanswered = questions.filter(
    (q) => q.userSelectedAnswer == null
  ).length;
  const incorrect = questions.length - correct - unanswered;
  return { correct, incorrect, unanswered };
};
