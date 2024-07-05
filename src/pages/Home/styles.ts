import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  padding: .5rem;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 124px;
  overflow-y: auto;
`;