import  Header  from "../../components/header.tsx"
import  CourseDash  from "../../components/coursedash.tsx"
import { House, LibraryBig, UserPen} from "lucide-react"
import { CardList, CardSection} from "./styles.ts";
import CertificateCard from "../../components/certificate.tsx";


export default function StudentCertificates () {
    const linksHeaderCertificates = [
        {label: "Meus Cursos", href: '/myCourses', icon: LibraryBig},
        {label: "Explorar", href: '/studentDashboard', icon: House},
        {label: "", href:'/myProfile', icon:UserPen}
        
    ]
    return (
        <>
        
        <Header links={linksHeaderCertificates}/>
        <CourseDash titulo="Certificados"/>
        <CardSection>
        <CardList>
            <CertificateCard/>
            <CertificateCard/>
            <CertificateCard/>
            <CertificateCard/>
            <CertificateCard/>

                
            

        </CardList>
        
        </CardSection>
        </>
            
       
    )


    
}
