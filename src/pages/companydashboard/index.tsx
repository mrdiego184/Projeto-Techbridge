import {DashboardHeader, CompanyInfo, CompanyName, CompanyEdit} from "./styles"
import CourseManagement from "../../components/coursemanager.tsx"

export default function CompanyDashboard () {
    return (
        <>
        <DashboardHeader>
            <CompanyInfo>
                
                <CompanyName>NOME DA EMPRESA</CompanyName>

                <CompanyEdit to="/companyEdit">Editar dados</CompanyEdit>

            </CompanyInfo>

            <h1>GERENCIADOR DE CURSOS</h1>

        </DashboardHeader>

        <CourseManagement>

        </CourseManagement>

        </>

    )
}
