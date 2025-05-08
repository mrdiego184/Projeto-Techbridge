import { Button, Container, Title } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Choice() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Escolha uma opção</Title>
      <Button onClick={() => navigate("/company")}>
          Sou empresa
        </Button>

      <Button onClick={() => navigate("/student")}>
        Sou estudante
      </Button>
    </Container>
  );
}
