import styled from "styled-components";

export const Container = styled.section`
  margin: 50px 0 28px;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    
    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: auto;
      gap: 8px;
      margin: 0;
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 10px;
      border: 0;
      padding: 14px 32px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      
      p {
        font-size: 16px;
      }

      svg {
        width: 16px;
        height: 16px;
      }
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 32px;
      font-weight: 400;
    }
  } 

`;