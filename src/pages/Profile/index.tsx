import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/"><FiArrowLeft /></Link>
      </header>
      <Form>
        <Avatar>
          <img 
            src="https://github.com/beefreguglia.png" 
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
             />
          </label>
        </Avatar>
        <Input 
          placeholder="Nome"
          type="text"
          icon={<FiUser />}
        />
        <Input 
          placeholder="E-mail"
          type="email"
          icon={<FiMail />}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={<FiLock />}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={<FiLock />}
        />
        <Button>Salvar</Button>
      </Form>
    </Container>
  );
}