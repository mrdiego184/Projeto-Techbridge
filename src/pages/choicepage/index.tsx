import { Button, MainSection, LogoImg, LogoSection, LogoText, Title, MainInfoContainer, InfoTitles, InfoTexts, AcessSection, EniacPartnerLogo, AcessRedirect, BenefitsSection, BenefitsTitle, StudentsBenefits, CompanyBenefits, BenefitsText, ImgContainer, ImgBenefit, BenefitsIcon, IconsSection, BenefitsInfo, ContentColumn} from "./styles";
import { useNavigate } from "react-router-dom";
import {BookOpen, UserSearch, BriefcaseBusiness, Hourglass} from "lucide-react"

export default function Choice() {
  const navigate = useNavigate();

  return (

      <> 
      <AcessSection>
        <a target="blank" href="https://www.eniac.edu.br/"><EniacPartnerLogo src="https://www.eniac.edu.br/hubfs/logos_eniac_centro_universitario_branco-1.png"></EniacPartnerLogo> </a>
        <AcessRedirect>ACESSAR</AcessRedirect>
      </AcessSection>
      <LogoSection>

      <LogoImg src="./src/assets/logotechbri.png" />
      <LogoText>TechBridge</LogoText>

      </LogoSection>

    
    <MainSection>

        <MainInfoContainer>
          <InfoTitles>Conectando talentos á inovação!</InfoTitles>
          <InfoTexts> A TechBridge é uma plataforma que tem a proposta de impulsionar e capacitar os
            estudantes para o mercado de trabalho na área de tecnologia, os aproximando mais das características
            procuradas pelas maiores empresas de tecnologia.<br/>
            Através de cursos fornecidos pelas empresas parceiras, os estudantes podem obter conhecimento e
            certificação gratuita de maneira intuitiva e simplificada.
            
          </InfoTexts>
        </MainInfoContainer>

        <BenefitsSection>

          <BenefitsTitle>Quais são os benefícios?</BenefitsTitle>

         <StudentsBenefits>
  <BenefitsInfo>
    <ContentColumn>
      <BenefitsText>
        Para os estudantes, a capacidade de aprender e credibilizar suas capacidades, aumentando suas chances no mercado de trabalho
      </BenefitsText>
      <IconsSection>
        <BenefitsIcon>
          <BookOpen /> <BriefcaseBusiness />
        </BenefitsIcon>
      </IconsSection>
    </ContentColumn>

    <ImgContainer>
      <ImgBenefit src="/src/assets/student.jpg" />
    </ImgContainer>
  </BenefitsInfo>
</StudentsBenefits>

          

             <CompanyBenefits>
  <BenefitsInfo>
     <ImgContainer>
      <ImgBenefit src="/src/assets/company.jpg" />
    </ImgContainer>
    <ContentColumn>
      <BenefitsText>
       Para as empresas, a filtragem de potenciais candidatos para contratação, agilizando os processos de headhunting e economizando recursos.
      </BenefitsText>
      <IconsSection>
        <BenefitsIcon>
          <UserSearch/> <Hourglass/>
        </BenefitsIcon>
      </IconsSection>
    </ContentColumn>
  </BenefitsInfo>
</CompanyBenefits>

        </BenefitsSection>

        <Title>Selecione uma opção para acessar a plataforma</Title>
        <Button onClick={() => navigate("/companyRegister")}>
          Sou empresa
        </Button>

        <Button onClick={() => navigate("/studentRegister")}>
          Sou estudante
        </Button>
      </MainSection>
      </>
  );
}
