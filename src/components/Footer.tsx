import { Box, Button } from "@mui/material";
import { useQuestionStore } from "../store/questions";
import { useQuestionsData } from "../hooks/useQuestionsData";

export const Footer = () => {
  const { reset } = useQuestionStore();
  const { correct, incorrect, unanswered } = useQuestionsData();
  return (
    <Box
      sx={{
        padding: 3,
      }}
    >
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
      <div style={{ marginTop: "16px" }}>
        <Button onClick={() => reset()}>Resetear juego</Button>
      </div>
    </Box>
  );
};
