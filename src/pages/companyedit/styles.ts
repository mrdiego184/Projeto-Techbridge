import styled from "styled-components"
import { Link } from "react-router-dom"



export const DataSection = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    background-color: ${props => props.theme["gray-800"]};
    width:50%;
    margin: 0 auto;
    font-size:1.5rem;


`

export const DataInfo = styled.div`
    display:flex;
    align-items:left;
    flex-direction:column;
    padding:30px;
    gap:30px;
`

export const DataTitle = styled.h1`
    display:flex;
    color: ${props => props.theme["blue-300"]};
    margin-bottom:10%;
    align-items:center;
    justify-content:center;
    margin-top:5%;
    font-size:3rem;


`
export const DataType = styled.h3`
    color: ${props => props.theme["blue-300"]};

`

export const ButtonSection = styled.div`
    margin-top: 4%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:3%;
    margin-bottom:10%;
`
export const SaveButton = styled.button`
    border: solid 1px ${props => props.theme["green-500"]};
    color: ${props => props.theme["green-500"]};
    background-color: ${props => props.theme["gray-900"]};
    padding: 10px;
    font-size:1.5rem;
    border-radius:5px;
    transition: 0.3s;
    cursor:pointer;

    &:hover {
    background-color:${props => props.theme["green-500"]};
    color: white;
    }
`
export const ReturnButton = styled(Link)`
    border: solid 1px ${props => props.theme["blue-300"]};
    color: ${props => props.theme["blue-300"]};
    text-decoration:none;
    padding: 10px;
    font-size:1.5rem;
    border-radius:5px;
    transition: 0.3s;

    &:hover {
    background-color:${props => props.theme["blue-300"]};
    color: white;
    }

`