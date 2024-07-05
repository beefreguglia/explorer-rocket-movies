import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/beefreguglia.png" 
          alt="Imagem de uma pessoa" 
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Bernardo Freguglia</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}