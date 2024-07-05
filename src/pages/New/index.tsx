import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/Textarea";
import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <Link to="/">
              <FiArrowLeft />
              <p>Voltar</p>
            </Link>
            <h1>Novo filme</h1>
          </header>
          <div className="flex">
            <Input 
              placeholder="Título"
              className="flex-1"
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              className="flex-1"
            />
          </div>
          <TextArea placeholder="Observações"></TextArea>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo Marcador" />
            </div>
          </Section>
          <div className="flex">
            <Button 
              variant="secondary" 
              type="button"
            >
              Excluir filme
            </Button>
            <Button>Salvar</Button>
          </div>
        </Form>
      </main>
    </Container>
  )
}