import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > svg {
    margin-top: 8px;
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;