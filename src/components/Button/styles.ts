import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.BACKGROUND_800};

  border: 0;
  padding: 14px 32px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`;