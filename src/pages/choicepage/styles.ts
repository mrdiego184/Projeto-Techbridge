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
export const Title = styled.h1` 
    font-size: 2rem;
    color: ${props => props.theme["gray-100"]};
    margin-bottom: 2rem;
`
export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    background-color: ${props => props.theme["blue-700"]};
    color: ${props => props.theme["gray-100"]};
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.theme["blue-300"]};
    }
`
