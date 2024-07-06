import styled from "styled-components";

export const Container = styled.div<{ $size: string }>`
  display: flex;
  align-items: center;
  gap: 6px;

  > svg {
    margin-top: 8px;
    width: ${({ $size }) => $size === 'sm' ? '16px' : '20px'};
    height: ${({ $size }) => $size === 'sm' ? '16px' : '20px'};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;