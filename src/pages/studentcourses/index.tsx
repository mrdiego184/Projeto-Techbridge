import  Header  from "../../components/header.tsx"
import  CourseDash  from "../../components/coursedash.tsx"
import StudentMyCourse from "../../components/mycourse.tsx"
import { GraduationCap, House, UserPen } from "lucide-react"
import {MyCourseSection} from "./styles.ts"


export default function StudentCourses () {
    const linksHeaderCourses = [
        {label: "Explorar", href: '/studentDashboard', icon: House},
        {label: "Certificados", href: '/myCertificates', icon: GraduationCap},
        {label: "", href: '/myProfile', icon:UserPen}
    ]
    return (
        <>
        
        <Header links={linksHeaderCourses}/>
        <CourseDash titulo="Acompanhe seus Cursos"/>

        <MyCourseSection>

            <StudentMyCourse/>
            <StudentMyCourse/>
            
            

        </MyCourseSection>
        </>
            
       
    )


    
}
