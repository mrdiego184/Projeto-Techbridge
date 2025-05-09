import  Header  from "../../components/header.tsx"
import { House, LibraryBig, UserPen} from "lucide-react"

export default function StudentProfile (){
    const linksHeaderMyprofile = [
        {label: "Meus Cursos", href: '/myCourses', icon: LibraryBig},
        {label: "Explorar", href: '/studentDashboard', icon: House},
        {label: "", href:'/myProfile', icon:UserPen}
        
    ]
    return (
        <Header links={linksHeaderMyprofile} />
    )
}