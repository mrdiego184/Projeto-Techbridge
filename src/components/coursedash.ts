import styled from "styled-components";

export const ContainerTitle = styled.h1`
    color:${props => props.theme["blue-300"]};
    margin-top: 8%;
    font-size: 4rem;
    font-weight:black;

    @media (max-width: 768px) {
    font-size: 2.5rem;
    }
`
export const TitleHr = styled.hr`
    border-color: ${props => props.theme["blue-300"]};
    border-width: 2px;
    margin-top: 1%;
    width: 60dvw;
`
export const CourseContainer = styled.div`  
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`
