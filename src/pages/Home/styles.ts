import styled from "styled-components";

import { Button as MuiButton } from "@mui/material";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  flex-direction: column;
`;

export const Button = styled(MuiButton)`
  margin-top: 16rem;
  width: 20rem;
`;

export const QuestionPrevCounter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  flex-direction: column;
  animation: resize infinite 1.5s;

  @keyframes resize {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.6);
    }

    100% {
      transform: scale(1);
    }
  }
`;
