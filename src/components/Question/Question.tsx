import { Button, Typography } from "@mui/material";

import * as S from "./styles";

import { QuestionModel } from "../../pages/Home";

type QuestionProps = {
  data: QuestionModel;
  onSelectOption: (optionId: string) => void;
}

const defaultOptionStyle = {
  fontWeight: "bold",
  fontSize: "1.3rem",
  textTransform: "capitalize"
}

export function Question({ data: question, onSelectOption }: QuestionProps) {
  return (
    <S.Container>
      <Typography maxWidth={"80%"} fontFamily={"cursive"} textAlign={"center"} fontSize="2.4rem" fontWeight={"bold"} marginBottom={"2rem"}>
        {question.question}
      </Typography>

      <S.QuestionOptions>
        <Button
          onClick={() => onSelectOption(question.options[0].value)}
          variant="contained"
          style={{ ...defaultOptionStyle, background: "orange" }}
        >
          {question.options[0].label}
        </Button>

        <Button
          variant="contained"
          onClick={() => onSelectOption(question.options[1].value)}
          style={{ ...defaultOptionStyle, background: "blue" }}
        >
          {question.options[1].label}
        </Button>
        <Button
          variant="contained"
          onClick={() => onSelectOption(question.options[2].value)}
          style={{ ...defaultOptionStyle, background: "green" }}
        >
          {question.options[2].label}
        </Button>

        <Button
          variant="contained"
          onClick={() => onSelectOption(question.options[3].value)}
          style={{ ...defaultOptionStyle, background: "purple" }}
        >
          {question.options[3].label}
        </Button>
        
      </S.QuestionOptions>
    </S.Container>
  );
}
