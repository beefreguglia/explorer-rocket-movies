import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Container, Content, NewNote } from "./styles";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";


export function Home() {
  return(
    <Container>
      <Header />
      <Content>
        <Section title="Minhas notas">
          <Note 
            data={{ 
              title: "React", 
              tags: [
                { id: 1, name: 'React' },
                { id: 2, name: 'Rocketseat' }
              ] 
            }} 
          />
        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}