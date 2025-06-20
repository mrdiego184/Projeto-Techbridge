import { Edit2, Trash, Plus } from 'lucide-react';
import {
  ManagementSection,
  CourseList,
  CourseCard,
  CourseInfo,
  CourseTitle,
  CourseStatus,
  ActionsContainer,
  ActionButton,
  AddCourseButton,
  ResponsivityCourseManager,
} from './coursemanager';

type Curso = {
  id: number;
  name: string;
  description: string;
  youtube_link: string;
};

type Props = {
  cursos: Curso[];
};

const CourseManagement = ({ cursos }: Props) => {
  const handleEditContent = (courseId: number) => {
    console.log(`Editar conteúdo - Curso ID: ${courseId}`);
  };

  return (
    <ResponsivityCourseManager>
      <ManagementSection>
        {cursos.length === 0 ? (
          <div>
            <p>Nenhum curso cadastrado ainda.</p>
            <AddCourseButton to="/companyCourse">
              <Plus /> ADICIONAR CURSO
            </AddCourseButton>
          </div>
        ) : (
          <>
            <CourseList>
              {cursos.map((curso) => (
                <CourseCard key={curso.id}>
                  <CourseInfo>
                    <CourseTitle>{curso.name}</CourseTitle>
                    <CourseStatus>{curso.description}</CourseStatus>
                    <a href={curso.youtube_link} target="_blank" rel="noopener noreferrer">
                      Ver vídeo
                    </a>
                  </CourseInfo>

                  <ActionsContainer>
                    <ActionButton edit onClick={() => handleEditContent(curso.id)}>
                      <Edit2 /> EDITAR CONTEÚDO
                    </ActionButton>
                    <ActionButton remove>
                      <Trash /> REMOVER
                    </ActionButton>
                  </ActionsContainer>
                </CourseCard>
              ))}
            </CourseList>

            <AddCourseButton to="/companyCourse">
              <Plus /> ADICIONAR CURSO
            </AddCourseButton>
          </>
        )}
      </ManagementSection>
    </ResponsivityCourseManager>
  );
};

export default CourseManagement;
