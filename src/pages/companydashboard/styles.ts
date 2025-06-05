import styled from "styled-components"
import {Link} from "react-router-dom"
 

export const DashboardHeader = styled.div`
    border-bottom: solid ${props => props.theme["blue-300"]}; 
    height: 18dvh;
    display: flex;
    align-items: center;
    width: 100%;


    h1 { 
    color: ${props => props.theme["blue-300"]}; 
    margin: 0 auto;
    font-size: 2.5rem;
    font-weight: bolder;

    }

    @media(max-width: 1024px){
    height: 10dvh;

    h1 {
    font-size: 1rem;
    }


    }

    

    @media(max-width: 768px){
    height: 10dvh;

    h1 {
    font-size: 1rem;
    }


    }
`

export const CompanyInfo = styled.div`
    border-right: solid ${props => props.theme["blue-300"]}; 
    width: 25%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content;center;
    height:100%;

    @media(max-width: 768px) {
    display:flex;
    }
`

export const CompanyName = styled.h3`
    color: ${props => props.theme["blue-300"]}; 
    font-size: 1rem;
    margin-top: 10%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;



    @media(max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
    }

`

export const CompanyEdit = styled(Link)`
    color: white;
    text-decoration: none;
    margin-top: 2%;

    &:hover{
    text-decoration: underline;
    }

     @media(max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
    }
`


 