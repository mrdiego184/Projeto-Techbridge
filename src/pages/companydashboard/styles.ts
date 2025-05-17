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
`

export const CompanyInfo = styled.div`
    border-right: solid ${props => props.theme["blue-300"]}; 
    width: 25%;
    display:flex;
    flex-direction: column;
    align-items: center;
    height:100%;
`

export const CompanyName = styled.h3`
    color: ${props => props.theme["blue-300"]}; 
    font-size: 2rem;
    margin-top: 10%;

`

export const CompanyEdit = styled(Link)`
    color: white;
    text-decoration: none;
    margin-top: 2%;
`

export const ManagamentSection = styled.div`
    height: 82dvh;
    background-color: ${props => props.theme["blue-700"]}; 
`