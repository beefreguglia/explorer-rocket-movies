import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  padding: .5rem;
  grid-template-rows: 116px auto 64px;
  grid-template-areas: 
  "header"
  "content"
  "newnote";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;
`;

export const NewNote = styled(Link)`
  grid-area: newnote;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 0 0 10px 10px;
`;