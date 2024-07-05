import { ReactNode } from "react";

import { Container } from "./styles";

interface SectionProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

export function Section({ title, children, action }: SectionProps) {
  return(
    <Container>
      <div>
        <h2>{title}</h2>
        {action && action}
      </div>
      {children}
    </Container>
  )
}