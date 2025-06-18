import  Header  from "../../components/header.tsx"
import { House, LibraryBig, GraduationCap, Edit2, File} from "lucide-react"
import { DataSection, DataTitle, DataType, DataInfo, ButtonSection, ReturnButton, SaveButton, StudentImage, StudentProfilee} from "./styles"

export default function StudentProfile (){
    const linksHeaderMyprofile = [
        {label: "Meus Cursos", href: '/myCourses', icon: LibraryBig},
        {label: "Explorar", href: '/studentDashboard', icon: House},
         {label: "Certificados", href: '/myCertificates', icon: GraduationCap}
       
       
    ]
    return (
        <>

        <Header links={linksHeaderMyprofile} />

        <DataTitle>PERFIL DO ESTUDANTE</DataTitle>

        <StudentProfilee>

            <StudentImage src="https://img.icons8.com/win10/512w/FFFFFF/user.png"></StudentImage>

        </StudentProfilee>

            <DataSection>

                <DataInfo>

                <DataType>Nome Completo  <Edit2></Edit2></DataType>
                <p>Nome do Aluno</p>

                <DataType>E-mail  <Edit2></Edit2></DataType>
                 <p>E-mail do Aluno</p>

                <DataType>Telefone  <Edit2></Edit2></DataType>
                 <p>Telefone do Aluno</p>

                 <DataType>Currículo  <File></File></DataType>
                 <p>Alterar anexo de Currículo</p>


                </DataInfo>

            </DataSection>

            <ButtonSection>

                <ReturnButton to="/studentDashboard">Retornar para página anterior</ReturnButton>

                <SaveButton>Salvar Alterações</SaveButton>
            </ButtonSection>

            </>
    )
}