import {  ReactNode, TextareaHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  children?: ReactNode;
}

export function TextArea({ children, ...rest }: TextAreaProps) {
  return(
    <Container {...rest}>
      {children}
    </Container>
  ); 
}