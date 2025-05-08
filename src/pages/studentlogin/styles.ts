import styled from "styled-components";

export const Containerlogin = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
export const FormStudent = styled.div`
    display: flex;
    flex-direction: column;
    background-color:${props => props.theme["blue-700"]};
    gap: 20px;
    padding: 50px;
    border-radius: 20px;
    width: 23%;

    input {
    background-color:${props => props.theme["gray-800"]};
    padding: 8px;
    appearance: none;
    border-radius: 10px;
    border: none;
    color: white;
    }   

    input:focus {
    outline: none;
    }

    button {
    background-color: ${props => props.theme["blue-300"]};
    border: none;
    color: white;
    padding: 14px;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    }
    

    button:hover {
        background-color: ${props => props.theme["blue-700"]};
        
    }

    a {
    display:flex;
    color:${props => props.theme["blue-300"]}; 
    justify-content: center;
    }   
`;
export const MensagemErro = styled.div`
    color:red;
    
`

import { Link } from "react-router-dom";

export const LinkLogin = styled(Link)`
  && {
    color: ${(props) => props.theme["gray-100"]};
    text-decoration: none;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;
