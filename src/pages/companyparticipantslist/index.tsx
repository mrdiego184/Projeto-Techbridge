import { MoveLeft, User } from "lucide-react";
import { Container, DivUser, Header, Line, NomeAuluno, Status, Title } from "./styles";

export default function CompanyParticipantsList() {
  return (
    <Container>
        <Header>
        <MoveLeft/>

        <Title>Programação em Java Orientada a Objetos</Title>
        </Header>
        


        <Title>PARTICIPANTES</Title>

        <DivUser>
            <User/>
            <NomeAuluno>Nome do Aluno</NomeAuluno>
            <p>90% Concluido</p>
            <Status>Em andamento </Status>
        </DivUser>
        <Line/>
        <DivUser>
            <User/>
            <NomeAuluno>Nome do Aluno</NomeAuluno>
            <p>90% Concluido</p>
            <Status>Em andamento </Status>
        </DivUser>
                <Line/>

        <DivUser>
            <User/>
            <NomeAuluno>Nome do Aluno</NomeAuluno>
            <p>90% Concluido</p>
            <Status>Em andamento </Status>
        </DivUser>
                <Line/>

    </Container>
  )
}
