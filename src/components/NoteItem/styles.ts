import styled from "styled-components";

export const Container = styled.div<{ $isnew: string }>`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew === 'true' 
    ? 'transparent' 
    : theme.COLORS.BACKGROUND_700 
  };
  color: ${({ theme, $isnew }) => $isnew ? theme.COLORS.GRAY_200 : '#FFFFFF'};
  border: ${({ theme, $isnew }) => $isnew === 'true' 
    ? `1px dashed ${theme.COLORS.GRAY_200}` 
    : 'none'
  };
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;