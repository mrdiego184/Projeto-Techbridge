import styled from "styled-components";
import {Link} from "react-router-dom";
import type { LiHTMLAttributes } from 'react';


interface ModuleLinksProps extends LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
}


export const StudySection = styled.div`
    max-height: 1800px;
    display:flex;
`
export const ModuleInfo = styled.div`
    margin-top: 5%;
    width: 73%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;


`
export const CourseTitle = styled.h1`
    color: ${props => props.theme["blue-300"]}; 
    font-size: 2.5rem;
    text-align:center;

    @media (max-width:768px) {
    font-size: 1.5rem;
    }
`
export const TitleHr = styled.hr`
    border-color: ${props => props.theme["blue-300"]};
    border-width: 2px;
    margin-top: 1%;
    width: 60dvw;

    
`
export const ModuleDescription = styled.p`
    color: white;
    display: flex;
    justify-content: center;
    text-align:center;
    margin-top: 5%;
    font-size:1rem;

     @media (max-width:768px) {
    font-size: 0.8rem;
    }
`

export const ModuleTitle = styled.h1`
    color: white;
    margin-top: 5%;

     @media (max-width:768px) {
    font-size: 1.5rem;
    }
`
export const EbookDownload = styled.button`
    color: ${props => props.theme.white}; 
  margin-top: 5%;
  background-color: ${props => props.theme["blue-300"]}; 
  border-radius: 4px;
  border: 2px solid ${props => props.theme["blue-300"]};
  padding: 10px 20px; 
  font: inherit;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease; /* Transição suave para hover */
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s;

  &:hover {
    color:  ${props => props.theme["blue-300"]};
    background-color: ${props => props.theme["blue-700"]};
  }

   @media (max-width:768px) {
    margin-top: 20%;
    }

  `

  

export const ModuleVideoClass = styled.div`
    margin-top: 5%;
    background-color:${props => props.theme["blue-700"]};
    width: 60dvw;
    height: 50dvh;
    border-radius: 8px;
    margin-bottom: 5%;
    display:flex;
    justify-content:center;
    align-items:center;
    color:cyan;
    

    @media (max-width:1024px) {
    margin-top: 20%;
    height: 30dvh;
    }

    


`


export const ModuleSelector = styled.div`
    width: 430px;
    position: fixed;
    height:1000dvh;
    margin-left: 75%;
    border-left: solid 3px ${props => props.theme["blue-300"]};
    display: flex;
    flex-direction: column;
    align-items: center;

     @media (max-width:1024px) {
    width:30dvw;
    }
`
export const ReturnIcon = styled(Link)`
    display: flex;
    justify-content:center;
    color: ${props => props.theme["blue-300"]};
    margin-top: 5%;
    transition: 0.3s;
    padding: 0;

    &:active {
    color: ${props => props.theme["blue-300"]}; 
    box-shadow: none;
    }

    &:hover {
    background-color: ${props => props.theme["blue-300"]};
    color: white;
    border-radius:60px;
    box-shadow: 0 0 10px #0077ff, 0 0 10px #00ccff;
    }

    @media (max-width:1024px) {
    margin-left: -20%;
    }


`
export const ModuleList = styled.ul`
    display:flex;
    flex-direction: column;
    list-style:none;
    margin-top: 5%;

    @media (max-width:768px) {
    margin-top:20%;
    }
`

export const ModuleLinks = styled.li<ModuleLinksProps>`
    color: ${props =>  props.active ? props.theme.white : props.theme["blue-300"]};
    background-color: ${props => props.active ? props.theme["blue-300"] : props.theme["gray-900"]};
    padding: 10px;
    border-radius:4px;
    cursor: pointer;
    transition: all 0.3s ease;

`
    
