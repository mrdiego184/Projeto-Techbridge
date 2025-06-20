import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  CourseBackground,
  CourseFront,
  CourseInfo,
  CourseTitle,
  CourseDescription,
  CourseModules,
  Broughtby,
  Broughtbytext,
  Return,
  SignUp,
  CompanyIcon,
  ModulesTitles
} from "./styles";
import Header from "../../components/header.tsx";
import { GraduationCap, LibraryBig, UserPen } from "lucide-react";

export default function CoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const linksHeader = [
    { label: "Meus Cursos", href: "/myCourses", icon: LibraryBig },
    { label: "Certificados", href: "/myCertificates", icon: GraduationCap },    
    { label: "", href: "/myProfile", icon: UserPen }
  ];

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/courses/${id}`);
        setCurso(response.data);
      } catch (error) {
        console.error("Erro ao buscar curso:", error);
        alert("Erro ao carregar informações do curso.");
      } finally {
        setLoading(false);
      }
    };

    fetchCurso();
  }, [id]);

  const handleInscricao = async () => {
    try {
      const studentData = JSON.parse(localStorage.getItem("user") || "{}");

      if (!studentData.id) {
        alert("Faça login primeiro.");
        return;
      }
      
      const data = {
        student_id: studentData.id,
        course_id: Number(id)
      };

      await axios.post("http://localhost:8000/enrollments", data);

      alert("Inscrição realizada com sucesso!");
      navigate("/myCourses");

    } catch (error: any) {
      console.error("Erro ao inscrever:", error);
      alert(error.response?.data?.detail || "Erro ao realizar inscrição.");
    }
  };

  if (loading) {
    return <p>Carregando curso...</p>;
  }

  if (!curso) {
    return <p>Curso não encontrado.</p>;
  }

  return (
    <>
      <Header links={linksHeader} />

      <CourseFront>
        <CourseBackground src="https://s2.glbimg.com/zUts5MVhT_bzQdhyTj9YYZNSZGo=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/n/a/GuYYalSPmFyKGY9BZ1Ww/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg" />
      </CourseFront>

      <CourseInfo>
        <CourseTitle>{curso.name}</CourseTitle>

        <Broughtby>
          <Broughtbytext>Fornecido por</Broughtbytext>
          <CompanyIcon src="https://www.eniac.edu.br/hs-fs/hubfs/Logos-Eniac-2019-1.png?width=1150&height=233&name=Logos-Eniac-2019-1.png" />
        </Broughtby>

        <CourseDescription>{curso.n}</CourseDescription>

        <CourseModules>
        </CourseModules>

        <SignUp onClick={handleInscricao}>Inscrever-se</SignUp>

        <Return to="/studentDashboard">retornar para os cursos</Return>
      </CourseInfo>
    </>
  );
}
