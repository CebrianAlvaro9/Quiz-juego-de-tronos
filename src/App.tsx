import { Container, Stack, Typography } from "@mui/material";
import { Start } from "./components/Start";
import "./App.css";

import { Game } from "./components/Game";
import { useQuestionStore } from "./store/questions";
function App() {
  const { questions } = useQuestionStore();
  return (
    <>
      <main>
        <Container maxWidth="sm" sx={{ my: 4 }}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Typography variant="h3" component="h1">
              Juego de Tronos Quiz
            </Typography>
            <Typography variant="h6" component="h1">
              Pon a prueba tus conocimientos sobre la famosa serie Juego de
              Tronos.
            </Typography>
          </Stack>
          {questions.length === 0 ? <Start /> : <Game />}
        </Container>
      </main>
    </>
  );
}

export default App;
