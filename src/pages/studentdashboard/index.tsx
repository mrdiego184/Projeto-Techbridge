import  Header  from "../../components/header.tsx"
import  CourseDash  from "../../components/coursedash.tsx"
import  CourseCard  from "../../components/coursecard.tsx"
import { CardList, CardSection} from "./styles.ts";

interface Curso {
  id: number;
  name: string;
  description: string;
  youtube_link: string;
  company_name: string;
}


import { GraduationCap, LibraryBig, UserPen } from "lucide-react"
import { useEffect, useState } from "react";
import axios from "axios";
export default function StudentDashboard () {
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [loading, setLoading] = useState(true)

    const linksHeader = [
        {label: "Meus Cursos", href: '/myCourses', icon:LibraryBig},
        {label: "Certificados", href: '/myCertificates', icon:GraduationCap},
        {label: "", href: '/myProfile', icon:UserPen}
    ]

 useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/courses");
        setCursos(response.data);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

    return (
    <>
      <Header links={linksHeader} />
      <CourseDash titulo="Explore os cursos disponíveis!" />

      <CardSection>
        <CardList>
          {loading ? (
            <p>Carregando cursos...</p>
          ) : cursos.length === 0 ? (
            <p>Nenhum curso disponível.</p>
          ) : (
            cursos.map((curso) => (
              <CourseCard
                key={curso.id}
                id={curso.id}
                name={curso.name}
                description={curso.description}
                youtubeLink={curso.youtube_link}
                companyName={curso.company_name}
              />
            ))
          )}
        </CardList>
      </CardSection>
    </>
  );


    
}
