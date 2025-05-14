import styled from "styled-components";

// Container principal que envolve o Card e o Botão
export const CertificateContainer = styled.div`
  position: relative;
  margin-bottom: 50px; /* Espaço para o botão */
`;
// Titulo do Card
export const CardTitle = styled.h2`
    display:flex;
    color: ${props => props.theme["blue-300"]}; 
    align-items: center;
    font-weight: bolder;
    text-align: center; 
    margin-top: 4%;
    border-radius: 20px;
    transition: 0.3s;
    
   

`
// Estrutura do Card
export const Card = styled.div`
    position: relative;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content:center;
    height: 100%;
    border: 3px solid ${props => props.theme["blue-300"]}; 
    border-radius:30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease;


    &:hover{
    background-color:${props => props.theme["blue-300"]}; 
    transform: scale (1.2);
    box-shadow: 0 0 1px #0077ff, 0 0 7px #00ccff;
    
    ${CardTitle} {
      color: white;
    }

    }
    
`
// Imagem do Curso/Card
export const CardImg = styled.img`
    width: 100%;
    height: 80%;
    margin-top: -10%;
    object-fit: cover;


`
export const CertificateDownloaDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    margin-top: 1.7%;
    
    

`

export const CertificateDownload = styled.span`
    display:flex;
    justify-content:center;
    background-color: ${props => props.theme["gray-900"]};
    border: solid ${props => props.theme["green-500"]};
    color: ${props => props.theme["green-300"]};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;

    &:hover{
    color: white;
    background-color: ${props => props.theme["green-500"]};
    }
    

`
