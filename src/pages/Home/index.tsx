import { Header } from "../../components/Header";
import { Container, Content } from "./styles";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";


export function Home() {
  return(
    <Container>
      <Header />
      <Content>
        <Section 
          title="Meus filmes"
          action={
            <Link className="create-button" to="/new">
              <FiPlus />
              <p>Adicionar Filme</p>
            </Link>
          }
        >
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
    </Container>
  );
}