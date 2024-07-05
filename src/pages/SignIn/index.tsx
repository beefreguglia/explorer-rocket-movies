import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>
        <Input 
          placeholder="E-mail"
          type="text"
          icon={<FiMail size={20} />}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={<FiLock size={20} />}
        />
        <Button>Entrar</Button>
        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}