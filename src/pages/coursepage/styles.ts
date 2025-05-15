import styled from "styled-components"
import { Link } from "react-router-dom"

export const CourseFront = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: ${props => props.theme["blue-700"]};
`

export const CourseBackground = styled.img`
    border-radius: 20px;
    width: 800px;
    border: solid 1px ${props => props.theme["blue-300"]};
`

export const CourseInfo = styled.div`
    margin-top: 10%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 1100px;
    gap: 150px;
    
`

export const CourseTitle = styled.h1`
    color:  ${props => props.theme["blue-300"]};
    font-size: 3rem;
    
`
export const Broughtby = styled.div`
    display:flex;
    align-items: center;
    gap: 15px;
`
export const Broughtbytext = styled.h3`
    color: white;
    font-weight: bolder;
`
export const CompanyIcon = styled.img`
    width:200px;
    height:40px;

`
export const CourseDescription = styled.p`
    text-align: center;
    color: white;
    font-size: 2rem;
`
export const CourseModules = styled.ul`
    color:  ${props => props.theme["blue-300"]};
    
    
`
export const ModulesTitles = styled.li`
    color: white;
    font-weight: bolder;
    font-size: 2rem;
`
export const SignUp = styled.span`
    cursor: pointer;
    background-color: ${props => props.theme["blue-300"]};
    color: white;
    padding: 15px;
    border-radius: 5px;
    font-size:3rem;
`
export const Return = styled(Link)`
    color: ${props => props.theme["blue-300"]};
    text-decoration: none;
    font-size:1.5rem;
    margin-top: -4%;
    magin-bottom: 3%;

`
