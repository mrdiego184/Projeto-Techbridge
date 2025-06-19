import styled from "styled-components";


export const AcessSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    margin-top: 2%;
    gap: 12px;
    margin-left:73dvw;

`
export const AcessRedirect = styled.a`
    border-left: solid ${props => props.theme["blue-300"]};
    color: ${props => props.theme["blue-300"]};
    text-decoration:none;
    font-size:1.5rem;
    padding: 10px;

    &:hover {
        text-decoration:underline;
    }
`
export const EniacPartnerLogo = styled.img`
    width: 150px;

`


export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    max-width:100dvw;
    background-color: ${props => props.theme["gray-900"]};
    margin-top:3%;
`
export const LogoSection = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 12px;
    margin-top: 5%;
`
export const LogoImg = styled.img`
    width:250px;
    
`
export const LogoText = styled.h1`
    font-size: 6rem;
    font-weight: 400;
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    background: linear-gradient(90deg,#00d6d0,#00b3ff,#0072fe,#1f3fd9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`;


export const MainInfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    width: 70%;
    border-radius: 12px;
    heigth:100%;
    background-color:#2a2a2a;
    padding:30px;
    border: 1px solid ${props => props.theme["blue-300"]};
`
export const InfoTitles = styled.h2`
    margin-top:2%;
    margin-bottom: 1%;
    font-size: 2.5rem;
    font-weight: 400;
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    background: linear-gradient(90deg,#00d6d0,#00b3ff,#0072fe,#1f3fd9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`
export const InfoTexts = styled.p`
    color:white;
    text-align:center;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    
`
export const BenefitsSection = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    margin-top:10%;


`
export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const BenefitsInfo = styled.div`
     display:flex;
    align-items:center;
    flex-direction:row;

`
export const BenefitsTitle = styled.h1`
    color:white;
    font-size: 2.5rem;
    font-weight: 400;
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
`
export const BenefitsText = styled.h4`
    color:white;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    background: linear-gradient(90deg,#00d6d0,#00b3ff,#0072fe,#1f3fd9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-align:center;
`
export const IconsSection = styled.div`
    display:flex;
`
export const BenefitsIcon = styled.ul`
    display:flex;
    align-items:center;
    justify-content: center;
    gap:20px;
    margin-top:2%;
    color: ${props => props.theme["blue-300"]};
    
`
export const ImgContainer = styled.div`
    max-width:300px;
    max-height:auto;
`
export const ImgBenefit = styled.img`
    width:100%;
    border-radius: 15px;
`
export const StudentsBenefits= styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    background-color:rgb(32, 29, 29);
    width:100%;
    padding:70px;
    margin-top:3%;
    
`
export const CompanyBenefits = styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    flex-direction: row;
    background-color:rgb(31, 31, 31);
    width:100%;
    padding:70px;
`
export const ChoiceSection = styled.div`
    max-height: 100dvh;
    width: 100dvw;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -4%;
    font-weight: 400;
    font-family: "Lexend", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
`

export const TitleChoice = styled.h1`
    margin-top:8%;
    font-size: 2.5rem;
    background: linear-gradient(90deg, #00d6d0, #00b3ff, #0072fe, #1f3fd9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    text-align: center;
    margin-bottom: -5%;
`

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    height: 600px; 
    width: 80%; 
    max-width: 1200x;
    gap: 1rem; 
`

export const CompanyChoice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%; 
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    
  
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(https://img.freepik.com/fotos-gratis/grupo-de-pessoas-diversas-tendo-uma-reuniao-de-negocios_53876-25060.jpg?semt=ais_hybrid&w=740);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        filter: blur(2px);
        transition: opacity 0.3s ease;
        z-index: 1;
    }
    
   
    &:hover::before {
        opacity: 0.4;
    }
`

export const StudentChoice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%; 
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    
   
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(https://img.freepik.com/fotos-gratis/vista-frontal-de-um-estudante-do-sexo-masculino-usando-uma-mochila-preta-segurando-cadernos-e-arquivos-na-parede-azul_140725-42636.jpg?semt=ais_hybrid&w=740);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0;
        filter: blur(2px);
        transition: opacity 0.3s ease;
        z-index: 1;
    }
    
   
    &:hover::before {
        opacity: 0.4;
    }
`

export const ButtonsChoice = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 70px;
    color: ${props => props.theme["blue-300"]};
    text-decoration: none;
    text-align: center;
    border-radius: 5px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: 0.3s ease;
    border: solid 1px ${props => props.theme["blue-300"]};
    background-color: black;
    position: relative;
    z-index: 2; 
    
    &:hover {
        background-color: ${props => props.theme["blue-300"]};
        color: ${props => props.theme["gray-100"]};
    }
`