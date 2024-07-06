import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 124px;
  
  > a:first-child {
    align-self: flex-start;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: 8px;
  }

  > header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 24px;

    h1 {
      font-size: 36px;
      font-weight: 500;
      columns: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > p {
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }
`;

export const Info = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`;

export const Avatar = styled.div`
  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }
`;

export const Tags = styled.div`
  margin-top: 40px;
`;