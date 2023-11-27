import { useState, useEffect, useMemo } from "react";
import { Typography } from "@mui/material";

import * as S from "./styles";

type CounterProps = {
  onCounterEnd: () => void;
}

export function Counter({onCounterEnd }: CounterProps) {
  const [count, setCount] = useState(30);

  const color = useMemo(() => {

    if(count  > 10 && count < 20){
      return "yellow";
    }

    if(count <= 10){
      return "red"
    }

    return "green";
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }

      if(count === 0){
        onCounterEnd();
        setCount(30);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <S.Container>
      <Typography fontFamily={"cursive"} color={color} fontSize={"4rem"} fontWeight={"bold"}>
        {count}
      </Typography>
    </S.Container>
  );
}
