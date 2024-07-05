import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./style";

interface ButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
  isActive?: boolean;
}

export function ButtonText({ 
  children,
  isActive = false,
  ...rest
}: ButtonTextProps) {
  return (
    <Container
      $isactive={isActive.toString()} 
      {...rest}
    >
      {children}
    </Container>
  )
}