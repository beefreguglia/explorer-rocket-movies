import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Background, Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>
        <Input 
          placeholder="Nome"
          type="text"
          icon={<FiUser size={20} />}
        />
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
        <Button>Cadastrar</Button>
        <Link to="/">
          <FiArrowLeft  />
          <p>Voltar para o login</p>
        </Link>
      </Form>
      <Background />
    </Container>
  );
}