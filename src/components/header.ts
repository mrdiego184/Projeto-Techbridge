import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme["gray-900"]};
    border-bottom: solid;
    border-color: ${props => props.theme["blue-300"]};
    padding:40px;
    max-width: 100dvw;  
    display:flex;


    
    @media (max-width: 768px) {
    height: 20dvw;

    }

`
export const HeaderLinks = styled.ul`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    color:${props => props.theme["blue-300"]};
    list-style: none;
    font-size: 2rem;
    gap: 200px;
    width: 100%;
    
    li {
    transition: 0.5s;
    padding: 0;
    border-radius:10px
    
    }
    
    li:hover{
    background-color: ${props => props.theme["blue-300"]};
    color: white;
    border-radius:10px;
    box-shadow: 0 0 10px #0077ff, 0 0 20px #00ccff;
    }
    
    @media (max-width: 768px) {
    width: 100%;
    gap:100px;

    li {
    padding:0px;
    height:auto;
    }
    li:hover{
    box-shadow: 0 0 1px #0077ff, 0 0 10px #00ccff;
    }
    
  }
    `
    export const LinksHeader = styled(Link)`
        text-decoration:none;

    .textheader{ 
    color: ${props => props.theme["blue-300"]}; 
    transition: 0.5s;
    padding: 5px;
    border-radius:10px;
    text-align: center;
    font-weight: bolder;
        }

    .iconheader {
    display: none;
    text-decoration: none;
    transition: 0.5s;
    }

    &:hover .iconheader{
    color: white; 

  }

    
    .textheader:hover {
    color: white; 
     }

    

    &:active {
    color: ${props => props.theme["blue-300"]}; 
    box-shadow: none;
    }

    @media (max-width: 768px) {
    
    .textheader {
    display: none;
    }

    .iconheader {
    color: ${props => props.theme["blue-300"]}; 
    display:flex;
    width: 50px;
    height: 50px;
    padding:5px;
    
    
    }
    }
`;
    export const UserSection = styled.div`
     
    @media (max-width: 768px) {
        display:none;
        }

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: solid;
    padding-left: 30px;
    border-color: ${props => props.theme["blue-300"]};
    width:20%;

    span {
    color: ${props => props.theme["blue-300"]};

    }
    p {
    color: white;
    font-size: 0.9rem;
    }
    p:hover {
    text-decoration:underline;
    }

    `

    export const EditLink = styled(Link)`
    color: white;
    font-size: 0.9rem;
    text-decoration:none;
    cursor:pointer;

    &:hover {
    text-decoration:underline;
    }

    `
    export const Userimg = styled.img`
        width:70px;
        height:auto;
        border-radius:60px;
        border:solid ${props => props.theme["blue-300"]};
        

        
    @media (max-width: 768px) {
        display:none;
        }

    
    `
    