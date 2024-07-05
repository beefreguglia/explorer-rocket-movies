import { ReactNode } from "react";
import { Container } from "./styles";

interface TagProps {
  children: ReactNode;
}

export function Tag({ children }: TagProps) {
  return(
    <Container>{children}</Container>
  )
}