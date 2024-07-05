import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  padding: .5rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Form = styled.form`
  padding: 0 136px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > a {
    margin-top: 42px;
    align-self: center;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  border-radius: 10px;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;