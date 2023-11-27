import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Button,
  CircularProgress,
  Typography,
  createTheme,
} from "@mui/material";

import * as S from "./styles";
import { Question } from "../../components/Question/Question";

export type QuestionOptionModel = {
  label: string;
  value: string;
};

export type QuestionModel = {
  question: string;
  options: QuestionOptionModel[];
  correctOptionId: string;
};

let currentQuestionIndex = 0;
let questions: QuestionModel[] = [];
let correctAwnsers = 0;

import OpenAI from "openai";
import { mockedQuestionLists } from "../../questions";

const openAi = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export type OpenAiResult = {
  questions: {
    question: string;
    options: {
      id: string;
      label: string;
    }[];
    correctOptionId: string;
  }[];
};

const successSongs = ["success-song-1.mp3", "success-song-2.mp3"];
const errorSongs = ["error-song-1.mp3", "error-song-2.mp3"];
const openningSongs = ["opening-song-1.mp3", "opening-song-2.mp3"];
const finishSongs = ["finish-song-1.mp3", "finish-song-2.mp3"];

export function Home() {
  const defaultTheme = createTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionModel | null>(
    null
  );

  const [finishQuiz, setFinishiQuiz] = useState(false);

  function sortSongToPlay(songs: string[]) {
    const sortedSongIndex = Math.floor(Math.random() * songs.length);
    audioRef.current?.setAttribute(
      "src",
      `http://localhost:5173/songs/${songs[sortedSongIndex]}`
    );
    audioRef.current?.play();
  }

  async function loadQuestions() {
    setIsLoading(true);

    try {
      const text = `Preciso de uma lista contendo 8 questões do tema: Conhecimentos Gerais. Cada questão deve conter 4 alternativas e com indicativo da alternativa correta. Preciso que me retorne tudo em formato JSON tenha o seguinte formato sem nenhuma mensagem de introdução: 

      {
        questions: [
          {
            question: string;
            options: [{ id: string; label: string; }];
            correctOptionId: string;
          }
        ]
      }
`;

      const chatCompletion = await openAi.chat.completions.create({
        messages: [{ role: "user", content: text }],
        model: "gpt-3.5-turbo",
      });

      const result = JSON.parse(
        chatCompletion.choices[0].message.content!
      ) as OpenAiResult;

      const parsedData: QuestionModel[] = result.questions.map((question) => {
        return {
          correctOptionId: question.correctOptionId,
          options: question.options.map((option) => ({
            label: option.label,
            value: option.id,
          })),
          question: question.question,
        };
      });

      questions = parsedData;
    } catch (error) {
      console.log(error);

      const staticQuestionListIndex = Math.floor(Math.random() * mockedQuestionLists.length);
      const questionList = mockedQuestionLists[staticQuestionListIndex];

      const parsedData: QuestionModel[] = questionList.questions.map((question) => {
        return {
          correctOptionId: question.correctOptionId,
          options: question.options.map((option) => ({
            label: option.label,
            value: option.id,
          })),
          question: question.question,
        };
      });

      questions = parsedData;
      
    } finally {
      setIsLoading(false);
    }
  }

  function startThemeSong() {
    sortSongToPlay(openningSongs);
  }

  function pauseThemeSong() {
    audioRef.current?.pause();
  }

  async function startGame() {
    setFinishiQuiz(false);

    startThemeSong();
    await loadQuestions();
    pauseThemeSong();

    currentQuestionIndex = 0;
    correctAwnsers = 0;

    nextQuestion();
  }

  function nextQuestion() {
    if (currentQuestionIndex >= questions.length) {
      setFinishiQuiz(true);
      sortSongToPlay(finishSongs);
    }

    setCurrentQuestion(questions[currentQuestionIndex]);
    currentQuestionIndex++;
  }

  function handleReplyQuestion(optionId: string) {
    if (currentQuestion?.correctOptionId === optionId) {
      sortSongToPlay(successSongs);
      correctAwnsers++;
    } else {
      sortSongToPlay(errorSongs);
    }

    nextQuestion();
  }

  useEffect(() => {
    setIsLoading(false);
    setCurrentQuestion(null);
    setFinishiQuiz(false);
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <audio ref={audioRef} />
      <S.Container>
        {isLoading && <CircularProgress />}

        {!isLoading && !currentQuestion && !finishQuiz && (
          <>
            <Typography
              fontSize={"2.4rem"}
              fontWeight={"bold"}
              fontFamily={"cursive"}
              color="black"
              marginBottom={"2rem"}
            >
              Preparado??
            </Typography>
            <Button
              size="large"
              sx={{
                width: "50%",
                padding: "1rem 0px",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
              variant="contained"
              onClick={startGame}
            >
              Iniciar Jogo
            </Button>
          </>
        )}

        {currentQuestion && (
          <>
            {/* <Counter onCounterEnd={handleTimeExpire} /> */}

            <Question
              data={currentQuestion}
              onSelectOption={handleReplyQuestion}
            />
          </>
        )}

        {finishQuiz && (
          <>
            <Typography
              fontSize={"2.4rem"}
              fontWeight={"bold"}
              fontFamily={"cursive"}
              color="black"
              marginBottom={"2rem"}
            >
              Você acertou {correctAwnsers} de {questions.length}
            </Typography>
            <Button
              size="large"
              sx={{
                width: "50%",
                padding: "1rem 0px",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
              variant="contained"
              onClick={startGame}
            >
              Reiniciar jogo
            </Button>
          </>
        )}
      </S.Container>
    </ThemeProvider>
  );
}
