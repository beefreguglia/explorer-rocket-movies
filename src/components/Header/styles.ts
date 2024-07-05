import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  padding: 0 123px;

  border-bottom: 1px solid #3E3B47;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-size: 700;
  }
`;

export const Form = styled.form`
  flex: 1;
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    text-align: end;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    strong {
      font-size: 14px;
      columns: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;