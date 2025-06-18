import { Edit2 } from "lucide-react"
import { DataSection, DataTitle, DataType, DataInfo, ButtonSection, ReturnButton, SaveButton} from "./styles"
export default function CompanyEdit () {
    return (

        <>


            <DataTitle>DADOS DA EMPRESA</DataTitle>

            <DataSection>

                <DataInfo>

                <DataType>Razão Social/Nome da Empresa <Edit2></Edit2></DataType>
                <p>Nome da Empresa</p>

                <DataType>CNPJ <Edit2></Edit2></DataType>
                 <p>CNPJ da Empresa</p>

                <DataType>E-mail <Edit2></Edit2></DataType>
                 <p>Email da Empresa</p>

                <DataType>Telefone <Edit2></Edit2></DataType>
                 <p>Telefone da Empresa</p>

                </DataInfo>

            </DataSection>

            <ButtonSection>

                <ReturnButton to="/companyDashboard">Retornar para página anterior</ReturnButton>

                <SaveButton>Salvar Alterações</SaveButton>
            </ButtonSection>
    
        
        </>
    )
}