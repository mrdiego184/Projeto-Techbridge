import {CourseBackground, CourseFront, CourseInfo, CourseTitle, CourseDescription, CourseModules, Broughtby, Broughtbytext, Return, SignUp, CompanyIcon, ModulesTitles} from "./styles.ts"
import Header from "../../components/header.tsx"
import { GraduationCap, LibraryBig, UserPen } from "lucide-react"

export default function CoursePage() {

    const linksHeader = [
        {label: "Meus Cursos", href: '/myCourses', icon:LibraryBig},
        {label: "Certificados", href: '/myCertificates', icon:GraduationCap},
        {label: "", href: '/myProfile', icon:UserPen}
    ]
    return(
        <>

        <Header links={linksHeader}/>
        
        <CourseFront>
            <CourseBackground src="https://s2.glbimg.com/zUts5MVhT_bzQdhyTj9YYZNSZGo=/600x0/filters:quality(70)/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/n/a/GuYYalSPmFyKGY9BZ1Ww/2014-03-11-veja-como-resolver-problemas-com-o-java-no-pc.jpg"/>
        </CourseFront>

        <CourseInfo>
            <CourseTitle>Java Orientada a Objetos - 40 horas</CourseTitle>

            <Broughtby>
            <Broughtbytext>Fornecido por</Broughtbytext>
            <CompanyIcon src="https://www.eniac.edu.br/hs-fs/hubfs/Logos-Eniac-2019-1.png?width=1150&height=233&name=Logos-Eniac-2019-1.png"/>
            </Broughtby>

            <CourseDescription>Domine os princípios da programação orientada a objetos (POO) com Java, linguagem essencial para desenvolvimento de software robusto e escalável.</CourseDescription>

            <CourseModules>
                <ModulesTitles>Módulo 1 - Fundamentos POO</ModulesTitles>
                <ModulesTitles>Módulo 2 - Java Moderno</ModulesTitles>
                <ModulesTitles>Módulo 3 - Encapsulamento de variáveis</ModulesTitles>
                <ModulesTitles>Módulo 4 - Design e Arquitetura</ModulesTitles>
                <ModulesTitles>Módulo 5 - Aplicações práticas e projetos interativos</ModulesTitles>
            </CourseModules>

            <SignUp>Inscrever-se</SignUp>

        <Return to="/studentDashboard">retornar para os cursos</Return>
        </CourseInfo>

        </>
    )

}