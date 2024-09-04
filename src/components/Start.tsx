import { Button } from "@mui/material";
import { useQuestionStore } from "../store/questions";

export const Start = () => {
  const { fetchQuestions } = useQuestionStore();

  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      <Button onClick={fetchQuestions} variant="contained">
        Start
      </Button>
    </div>
  );
};
