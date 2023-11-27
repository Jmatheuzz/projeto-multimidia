import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const QuestionOptions = styled.div`
  display: grid;
  width: 50%;
  min-width: 600px;
  grid-template-rows: 10rem 10rem;
  grid-template-columns: repeat(2, 1fr); 
  gap: 2rem; 
`;

