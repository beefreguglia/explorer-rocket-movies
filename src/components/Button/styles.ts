import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  border: 0;
  padding: 14px 32px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  &.btn-primary {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  &.btn-secondary {
    background-color: #0D0C0F;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;