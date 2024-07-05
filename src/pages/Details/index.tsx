import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Container, Links, Content } from "./styles";


export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText>Excluir nota</ButtonText>
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Accusantium sunt error labore repellat deserunt laborum iure, 
            iusto nemo numquam consequuntur eligendi dolor aliquid ab, 
            maxime quisquam quibusdam! Accusantium, quisquam nam.
          </p>
          <Section title="links">
            <Links>
              <li><a href="#">http://www.rocketseat.com.br</a></li>
              <li><a href="#">http://www.rocketseat.com.br</a></li>
            </Links>
          </Section>
          <Section title="marks">
            <Tag>express</Tag>
            <Tag>node</Tag>
          </Section>
          <Button>
            voltar
          </Button>
        </Content>
      </main>
    </Container>
  )
}