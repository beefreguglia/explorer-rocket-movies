import { InputHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export function Input({ icon: Icon, ...rest}: InputProps) {
  return(
    <Container>
      {Icon && Icon}
      <input {...rest} />
    </Container>
  ); 
}