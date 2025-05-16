import { Link } from "react-router-dom"
import styled from "styled-components"

export const MyCourse = styled.div`
    display: flex;
    max-width: 1900px;
    margin-top:3%;
    gap:30px;
    margin-bottom: 2%;

    
`
export const MyCourseimg = styled.img`
    width: 400px;
    height: auto;
    border-radius:20px;
    border: solid ${props => props.theme["blue-300"]}; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:2%;

    @media (max-width: 768px){
    width:45dvw;
    height:25dvh;
    }
`
export const MyCoursetext = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    gap: 50px;

    @media (max-width: 768px){
    font-size: 10px;
    gap: 30px;
    }
`
export const MyCoursetitle = styled.h3`
    background-color: ${props => props.theme["blue-300"]}; 
    padding:15px;
    border-radius: 10px;
    text-align:center;

    
`
export const MyCousepercentage = styled.h1`
    font-size:3rem;

    @media (max-width: 768px){
    font-size: 2rem;
    }
`
export const LinksButton = styled(Link)`
    text-decoration:none;
    display:flex;

    &:active {
    color: ${props => props.theme["blue-300"]}; 
    box-shadow: none;
    }
`
export const MyCourseButtons = styled.div`
    display:flex;
    gap: 20px;
    font-size: 1.5rem;

    @media (max-width: 768px){
    font-size: 1rem;
    }
`
 
export const MyCourseAcess = styled.span`
    background-color: ${props => props.theme["blue-300"]}; 
    border-radius: 10px;
    padding: 8px;
    cursor: pointer;
    transition: 0.3s;

     &:hover {
    background-color: ${props => props.theme["blue-700"]}; 
    color:${props => props.theme["blue-300"]};
    }
`
export const MyCourseContinue = styled.span`
    background-color: ${props => props.theme["gray-900"]}; 
    border: solid 1px ${props => props.theme["blue-300"]}; 
    border-radius:10px;
    color: ${props => props.theme["blue-300"]}; 
    padding: 8px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
    background-color: ${props => props.theme["blue-300"]}; 
    color:white;
    }
`