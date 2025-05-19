import { Plus } from "lucide-react";
import { Button, Container, DivAdd, DivConfig, DivPlus, Header, Input, InputDescricao, Label, Title } from "./styles";

export default function CompanyCourse() {
  return (
    <Container>
      <Header>
        <Title>NOME DA EMPRESA</Title>
        <p>Editar dados</p>
        <p>NOME DO CURSO</p>
      </Header>

      <DivConfig>
        <p>Configuração Inicial</p>

        <Label htmlFor="">Título do Curso</Label>
        <Input type="text" />
        <Label htmlFor="">Descrição </Label>
        <InputDescricao type="text" />
      </DivConfig>

      <DivConfig>
        <p>Configuração Módulo 1</p>
        
        <Label htmlFor="">Título do Módulo</Label>
        <Input type="text" />
        <Label htmlFor="">Descrição do Módulo</Label>
        <InputDescricao type="text" />
      </DivConfig>

        <div>
            <DivAdd>
                <DivPlus>
                    <Plus />
                </DivPlus>
            <p>Adicionar Modulo</p>
            </DivAdd>
        <div>
          <Button>Salvar</Button>
          <Button>Descartar</Button>
        </div>
      </div>
    </Container>
  );
}
