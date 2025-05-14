import { Button, Container, Title } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Choice() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Escolha uma opção</Title>
      <Button onClick={() => navigate("/companyRegister")}>
          Sou empresa
        </Button>

      <Button onClick={() => navigate("/studentRegister")}>
        Sou estudante
      </Button>
    </Container>
  );
}
