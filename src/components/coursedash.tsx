import React from 'react'
import {CourseContainer, ContainerTitle, TitleHr} from "./coursedash"
type CourseDashTitles ={ 
    titulo:string;
}
export default function CourseDash({titulo}: CourseDashTitles){
    return (
        <CourseContainer>
        <ContainerTitle>{titulo}</ContainerTitle>
        <TitleHr/>
        </CourseContainer>
    )
}