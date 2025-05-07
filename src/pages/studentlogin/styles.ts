import styled from "styled-components";

export const Containerlogin = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3%;
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
    padding: 5px;
    appearance; none;
    border-radius: 10px;
    color: white;
    }   

    input:focus {
    outline: none;
    }

    button {
    background-color:black;
    color: white;
    padding:15px;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    }
    

    button:hover {
        background-color: ${props => props.theme["blue-300"]};
        
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