import { useState } from 'react';
import {ManagementSection,CourseList,CourseCard,CourseImage,CourseInfo,CourseTitle,CourseStatus,ParticipantsBadge,ActionsContainer,ActionButton,AddCourseButton,ResponsivityCourseManager} from './coursemanager';
import { Edit2, Users2, Trash, User, Plus} from 'lucide-react';

const CourseManagement = () => {
  
  const [courses] = useState([
    {
      id: 1,
      title: "Programação em Java Orientada a Objetos - 40 horas",
      startDate: "19/11/2024",
      participants: 6,
      image: "https://metodoprogramar.com.br/wp-content/uploads/2021/09/Os-8-frameworks-mais-populares-da-linguagem-Java.jpg"
    },
    {
      id: 2,
      title: "Programação em Python - 10 horas",
      startDate: "23/11/2024",
      participants: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEvJyUjkex89qzPfmjQxAiNZsVRD2IWcctg&s"
    },
    {
      id: 3,
      title: "Desenvolvimento Web com React - 25 horas",
      startDate: "01/12/2024",
      participants: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNd0m991ZXRKHwXR0_o9dgieNqM7rXy5Ubg&s"
    },
    {
      id: 4,
      title: "Banco de Dados SQL - 15 horas",
      startDate: "15/12/2024",
      participants: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY96BPkBqp2Z_gQdUVHpNh38YPdgP28F00yg&s"
    },
    {
      id: 5,
      title: "DevOps e Docker - 30 horas",
      startDate: "05/01/2025",
      participants: 3,
      image: "https://www.docker.com/app/uploads/2023/08/logo-guide-logos-1.svg"
    }
  ]);


  // funcoes para futuras integracoes
  const handleViewParticipants = (courseId) => {
    console.log(`Ver participantes - Curso ID: ${courseId}`);
    
  };

  const handleEditContent = (courseId) => {
    console.log(`Editar conteúdo - Curso ID: ${courseId}`);
    
  };


  return (
    <ResponsivityCourseManager>
      <ManagementSection>
        <CourseList>
          {courses.map((course) => (
            <CourseCard key={course.id}>
              <CourseImage>
                <img 
                  src={course.image} 
                  alt={course.title}
                />
              </CourseImage>
              
              <CourseInfo>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseStatus>Ativo desde {course.startDate}</CourseStatus>
                <ParticipantsBadge>
                  <User></User> {course.participants} Estudantes participando
                </ParticipantsBadge>
              </CourseInfo>

    
              <ActionsContainer>
                <ActionButton 
                  participants
                  onClick={() => handleViewParticipants(course.id)}
                >
                 <Users2></Users2> VER PARTICIPANTES
                </ActionButton>
                
                <ActionButton 
                  edit
                  onClick={() => handleEditContent(course.id)}
                >
                  <Edit2></Edit2> EDITAR CONTEÚDO
                </ActionButton>

                <ActionButton 
                  remove
                  title="Remover curso"
                >
                  <Trash></Trash> REMOVER
                </ActionButton>
              </ActionsContainer>
            </CourseCard>
          ))}
        </CourseList>

       
    
        <AddCourseButton to="/companyCourse">
          <Plus></Plus> ADICIONAR CURSO
        </AddCourseButton>
      </ManagementSection>
    </ResponsivityCourseManager>
  );
};

export default CourseManagement;