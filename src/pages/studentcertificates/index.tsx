import  Header  from "../../components/header.tsx"
import  CourseDash  from "../../components/coursedash.tsx"
import { House, LibraryBig } from "lucide-react"


export default function StudentCertificates () {
    const linksHeaderCertificates = [
        {label: "Meus Cursos", href: '/myCourses', icon: LibraryBig},
        {label: "Explorar", href: '/studentDashboard', icon: House}
        
    ]
    return (
        <>
        
        <Header links={linksHeaderCertificates}/>
        <CourseDash titulo="Certificados"/>
        

        </>
            
       
    )


    
}
