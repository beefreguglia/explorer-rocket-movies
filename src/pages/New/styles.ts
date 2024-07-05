import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 125px auto;
  grid-template-areas:
  'header'
  'content';

  main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: #0D0C0F;
    border-radius: 8px;
    padding: 16px;
    gap: 24px;
  }
`;

export const Form = styled.form`
  padding: 0 124px;
  margin-top: 40px;
  
  > header {
    margin-bottom: 36px;

    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 36px;
      font-weight: 500;
      margin-top: 24px;
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  textarea {
    margin-top: 40px;
  }
`;