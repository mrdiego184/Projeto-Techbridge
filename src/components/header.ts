import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme["gray-900"]};
    border-bottom: solid;
    border-color: ${props => props.theme["blue-300"]};
    padding:40px;

`
export const HeaderLinks = styled.ul`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 40px;
    color:${props => props.theme["blue-300"]};
    list-style: none;
    font-size: 2.5rem;
    
    li:hover{
    background-color: ${props => props.theme["blue-300"]};
    color: white;
    border-radius:10px;
    }
    span{
    font-size: 2rem;
    border-left: solid;
    padding-left: 30px
    }
    p{
    color: white;}
    `