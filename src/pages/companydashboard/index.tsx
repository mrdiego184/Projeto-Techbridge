import {DashboardHeader, CompanyInfo, CompanyName, CompanyEdit, ManagamentSection} from "./styles"

export default function CompanyDashboard () {
    return (
        <>
        <DashboardHeader>
            <CompanyInfo>
                <CompanyName>KAFNET BRASIL</CompanyName>

                <CompanyEdit to="/companyEdit">Editar dados</CompanyEdit>

            </CompanyInfo>

            <h1>GERENCIADOR DE CURSOS</h1>

        </DashboardHeader>

        <ManagamentSection> 


        </ManagamentSection>
        </>

    )
}
