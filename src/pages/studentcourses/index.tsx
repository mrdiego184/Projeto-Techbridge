import Header from "../../components/header.tsx";
import CourseDash from "../../components/coursedash.tsx";
import StudentMyCourse from "../../components/mycourse.tsx";
import { GraduationCap, House, UserPen } from "lucide-react";
import { MyCourseSection } from "./styles.ts";
import { useEffect, useState } from "react";
import axios from "axios";

export default function StudentCourses() {
  const linksHeaderCourses = [
    { label: "Explorar", href: "/studentDashboard", icon: House },
    { label: "Certificados", href: "/myCertificates", icon: GraduationCap },
    { label: "", href: "/myProfile", icon: UserPen }
  ];

  const [cursos, setCursos] = useState<any[]>([]);

  useEffect(() => {
    const fetchCursos = async () => {
      const userData = JSON.parse(localStorage.getItem("user") || "{}");

      if (!userData.id) {
        alert("Faça login primeiro.");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8000/alunos/meus-cursos`, {
          params: { user_id: userData.id }
        });
        setCursos(response.data);
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
        alert("Erro ao carregar seus cursos.");
      }
    };

    fetchCursos();
  }, []);

  return (
    <>
      <Header links={linksHeaderCourses} />
      <CourseDash titulo="Acompanhe seus Cursos" />

      <MyCourseSection>
        {cursos.length === 0 ? (
          <p>Você ainda não está inscrito em nenhum curso.</p>
        ) : (
          cursos.map((curso) => (
            <StudentMyCourse
              key={curso.id}
              name={curso.name}
              description={curso.description}
              percentage={curso.percentage || 0} // Por enquanto deixa 0 ou se quiser calcula depois
            />
          ))
        )}
      </MyCourseSection>
    </>
  );
}
