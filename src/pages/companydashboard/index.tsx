import {DashboardHeader, CompanyInfo, CompanyName, CompanyEdit} from "./styles"
import CourseManagement from "../../components/coursemanager.tsx"
import { useEffect, useState } from "react";
import axios from "axios";


type Curso = {
  id: number;
  name: string;
  description: string;
  youtube_link: string;
};

type Props = {
  cursos: Curso[];
};


export default function CompanyDashboard () {
    const [cursos, setCursos] = useState<Curso[]>([]);
    const empresa = JSON.parse(localStorage.getItem("user") || "{}");

  useEffect(() => {
    async function fetchCursos() {
      try {
        if (!empresa?.id) return;

        const response = await axios.get(`http://localhost:8000/companies/${empresa.id}/courses`);
        setCursos(response.data);
      } catch (error: any) {
        console.error("Erro ao buscar cursos:", error.response?.data || error.message);
      }
    }

    fetchCursos();
  }, [empresa?.id]);

    return (
    <>
      <DashboardHeader>
        <CompanyInfo>
          <CompanyName>{empresa?.nome || "NOME DA EMPRESA"}</CompanyName>
          <CompanyEdit to="/companyEdit">Editar dados</CompanyEdit>
        </CompanyInfo>

        <h1>GERENCIADOR DE CURSOS</h1>
      </DashboardHeader>

      <CourseManagement cursos={cursos} />
    </>
  );
}
