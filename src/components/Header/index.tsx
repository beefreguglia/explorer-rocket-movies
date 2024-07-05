import { Input } from "../Input";
import { Container, Form, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <h2>RocketMovies</h2>
      <Form>
        <Input
          placeholder="Pesquisar por título"
        />
      </Form>
      <Profile to="/profile">
        <div>
          <strong>Bernardo Freguglia</strong>
          <span>sair</span>
        </div>
        <img 
          src="https://github.com/beefreguglia.png" 
          alt="Imagem de uma pessoa" 
        />
      </Profile>
    </Container>
  )
}