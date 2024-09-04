import { type Question } from "../types";
import { useQuestionStore } from "../store/questions";
import {
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Footer } from "./Footer";

const getBackgroundColor = (info: Question, index: number) => {
  const { userSelectedAnswer, answer } = info;

  const indexAnswer = info.options.indexOf(answer);

  if (userSelectedAnswer == null) return "transparent";
  const indexUserSelectedAnswer = info.options.indexOf(userSelectedAnswer);

  if (index !== indexUserSelectedAnswer && index !== indexAnswer)
    return "transparent";

  if (index === indexAnswer) return "green";
  console.log(indexUserSelectedAnswer, indexAnswer, index);
  if (index === indexUserSelectedAnswer) return "red";

  return "transparent";
};
export const QuestionComponet = ({ info }: { info: Question }) => {
  const { setResults } = useQuestionStore();

  return (
    <Card
      sx={{
        bgcolor: "#111",
        padding: 2,
        textAlign: "left",
        marginTop: 6,
        maxWidth: "100%",
      }}
    >
      <Typography variant="h5">{info.question}</Typography>

      <List disablePadding sx={{ bgcolor: "#333", marginTop: 2 }}>
        {info.options.map((option, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              sx={{
                backgroundColor: getBackgroundColor(info, index),
              }}
              disabled={info.userSelectedAnswer != null}
              onClick={() => setResults(index)}
            >
              <ListItemText sx={{ textAlign: "center" }}>{option}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export const Game = () => {
  const { questions, currentQuestion, setCurrentQuestion } = useQuestionStore();

  return (
    <Box paddingTop={2}>
      <IconButton
        disabled={currentQuestion === 0}
        onClick={() => setCurrentQuestion("previous")}
      >
        <ArrowBackIosNew />
      </IconButton>
      <span>
        {currentQuestion + 1}/{questions.length}
      </span>
      <IconButton
        disabled={currentQuestion === questions.length - 1}
        onClick={() => setCurrentQuestion("next")}
      >
        <ArrowForwardIos />
      </IconButton>
      <QuestionComponet info={questions[currentQuestion]} />
      <Footer />
    </Box>
  );
};
