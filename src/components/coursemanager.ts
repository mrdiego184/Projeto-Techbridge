   import styled from 'styled-components';
   import { Link } from 'react-router-dom';

   interface CourseButtonProps {
    participants?: boolean;
    edit?: boolean;
    remove?: boolean;
}

   export const ManagementSection = styled.div`
  padding: 2rem;
  background-color: #1a1a1a;
  min-height: 100vh;
`

 export const CourseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`

export const CourseCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #3a3a3a;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme["blue-300"]};
    box-shadow: 0 4px 12px rgba(74, 158, 255, 0.1);
  }
`

export const CourseImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 1.5rem;
  flex-shrink: 0;
  border: 2px solid ${props => props.theme["blue-300"]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CourseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CourseTitle = styled.h3`
  color: ${props => props.theme["blue-300"]};
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
`

export const CourseStatus = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 500;
`

export const ParticipantsBadge = styled.div`
  display: inline-flex;
  align-items: center;
  background-color:${props => props.theme["blue-700"]};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  width: fit-content;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 1rem;
`

export const ActionButton = styled.button<CourseButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.2rem;
  border: 1px solid ${props => props.theme["blue-300"]};
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;
  gap: 0.5rem;

  ${props => props.participants && `
    background-color: ${props.theme["blue-300"]};
    color: white;
  `}

  ${props => props.edit && `
    background-color: transparent;
    color: ${props.theme["blue-300"]};
  `}

  ${props => props.remove && `
    background-color: transparent;
    color: ${props.theme["red-300"]};
    border-color: ${props.theme["red-300"]};
  `}

  &:hover {
    background-color: ${props => props.remove ? '#F75A68' : '#4a9eff'};
    color: white;
    transform: translateY(-1px);
  }
`

export const AddCourseButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  border: 2px solid ${props => props.theme["green-300"]};
  color: ${props => props.theme["green-300"]};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  text-decoration: none;

  &:hover {
    background-color:${props => props.theme["green-300"]};
    color: white;
    transform: translateY(-2px);
  }
`

export const ResponsivityCourseManager = styled.div`
  @media (max-width: 768px) {
    ${CourseCard} {
      flex-direction: column;
      text-align: center;
    }

    ${CourseImage} {
      margin-right: 0;
      margin-bottom: 1rem;
    }
      ${ParticipantsBadge} {
      margin:0 auto;
    }

    ${ActionsContainer} {
      margin-left: 0;
      margin-top: 1rem;
      flex-direction: column;
      justify-content: center;
    }

  }
`