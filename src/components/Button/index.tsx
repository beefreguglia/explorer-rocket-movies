import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ 
  children, 
  variant = 'primary', 
  ...rest 
}: ButtonProps) {
  return (
    <Container 
      className={variant === 'primary' ? 'btn-primary' : 'btn-secondary'}
      {...rest}
    >
      {children}
    </Container>
  )
}