import { useState } from "react";
import axios from "axios";
import { Plus } from "lucide-react";
import {
  Button,
  Container,
  DivAdd,
  CourseSection,
  DivPlus,
  Input,
  InputDescricao,
  Label,
  Title,
  DashboardHeader,
  CompanyInfo,
  ModuleSection
} from "./styles";

export default function CompanyCourse() {
  const [titulo, setTitulo] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const empresa = JSON.parse(localStorage.getItem("user") || "{}");

const handleSalvarCurso = async () => {
  try {
    const empresaData = localStorage.getItem("user");
    if (!empresaData) {
      alert("Faça login primeiro");
      return;
    }

    const empresa = JSON.parse(empresaData)
    
    if (!empresa?.id) {
      alert("ID da empresa não encontrado. Faça login novamente.");
      return;
    }

    const dadosCurso = {
      name: titulo,
      description,
      youtube_link: youtubeLink,
      company_id: empresa.id
    };

    

    const response = await axios.post("http://localhost:8000/createCourses", dadosCurso);
    
    console.log("Resposta:", response.data);
    alert(`Curso criado com sucesso! ID: ${response.data.curso_id}`);

    setTitulo("");
    setDescription("");
    setYoutubeLink("");

  } catch (error: any) {
    console.error("Erro detalhado:", error.response?.data || error.message);
    alert(error.response?.data?.detail || "Erro ao criar curso");
  }
}
  return (

    <> 
    
      <DashboardHeader>
        <CompanyInfo>
        <Title>{empresa?.nome || "NOME DA EMPRESA"}</Title>
        <p>Editar dados</p>
        </CompanyInfo>

        <h1>{titulo || "TÍTULO DO CURSO"}</h1>
      </DashboardHeader>

      <Container>

      <CourseSection>
        <h2>Configuração Inicial</h2>

        <Label htmlFor="">Título do Curso</Label>
        <Input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Defina um título para o curso"
        />

        <Label htmlFor="">Descrição</Label>
        <InputDescricao
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Digite uma descrição para o curso"
        />

        <Label htmlFor="">Link do Youtube</Label>
        <Input
          type="text"
          value={youtubeLink}
          onChange={(e) => setYoutubeLink(e.target.value)}
          placeholder="Insira o link da vídeoaula"
        />
      </CourseSection>

      <ModuleSection>
        <h2>Configuração Módulo 1</h2>

        <Label htmlFor="">Título do Módulo</Label>
        <Input type="text" disabled placeholder="(Futuro campo de módulo)" />

        <Label htmlFor="">Descrição do Módulo</Label>
        <InputDescricao
          disabled
          placeholder="(Futuro campo de módulo)"
        />
      </ModuleSection>

      <div>
        <DivAdd>
          <DivPlus>
            <Plus />
          </DivPlus>
          <p>Adicionar Módulo</p>
        </DivAdd>

        <div>
          <Button variant="add"  onClick={handleSalvarCurso}>
            Salvar
          </Button>
          <Button variant="discard">Descartar</Button>
        </div>
      </div>
    </Container>

    </>
  );
}
