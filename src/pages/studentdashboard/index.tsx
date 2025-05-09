import  Header  from "../../components/header.tsx"
import  CourseDash  from "../../components/coursedash.tsx"
import { GraduationCap, LibraryBig } from "lucide-react"
export default function StudentDashboard () {

    const linksHeader = [
        {label: "Meus Cursos", href: '/myCourses', icon:LibraryBig},
        {label: "Certificados", href: '/myCertificates', icon:GraduationCap}
    ]
    return (
        <>

        <Header links={linksHeader}/>
        <CourseDash titulo="Explore os cursos disponíveis!"/>

        </>
            
       
    )


    
}
