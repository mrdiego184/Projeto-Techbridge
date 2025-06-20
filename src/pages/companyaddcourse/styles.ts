import styles, { styled } from 'styled-components';

export const DashboardHeader = styled.div`
    border-bottom: solid ${props => props.theme["blue-300"]}; 
    height: 18dvh;
    display: flex;
    align-items: center;
    width: 100%;

    h1 { 
    color: ${props => props.theme["blue-300"]}; 
    margin: 0 auto;
    font-size: 2rem;
    font-weight: bolder;



`
export const CompanyInfo = styled.div`
    border-right: solid ${props => props.theme["blue-300"]}; 
    width: 25%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content;center;
    height:50%;

    @media(max-width: 768px) {
    display:flex;
    }
`
export const Container = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`

export const Header = styles.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-bottom: 2rem;
    gap: 50px;
`

export const Title = styles.p`
    font-size: 24px;
    font-weight: bold;
    color:${props => props.theme["blue-300"]};
`

export const Label = styles.label`
text-align: left;
    font-weight: bold;
    margin: 10px 0;
`

export const Input = styles.input`
    width: 35%;
    padding: 8px;
    border: 1px solid ${props => props.theme["gray-600"]};
    border-radius: 4px;
    background-color: ${props => props.theme["gray-600"]};
    color:white;
`

export const InputDescricao = styles.textarea`
    width: 35%;
    height: 150px;
    padding: 8px;
    border: 1px solid ${props => props.theme["gray-600"]};
    background-color: ${props => props.theme["gray-600"]};
    border-radius: 4px;
    color: white;
    `

interface ButtonProps {
  variant?: 'add' | 'discard';
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 40px;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid;

background-color: ${props => props.theme["gray-700"]};

  color: ${({ theme, variant }) =>
    variant === 'add' ? theme["blue-300"] :
    variant === 'discard' ? theme["red-700"] :
    theme["blue-300"]
  };

  border-color: ${({ theme, variant }) =>
    variant === 'add' ? theme["blue-300"] :
    variant === 'discard' ? theme["red-700"] :
    theme["blue-300"]
  };

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === 'add' ? theme["blue-300"] :
      variant === 'discard' ? theme["red-500"] :
      theme["blue-300"]
    };

    color: ${({ theme, variant }) =>
      variant === 'add' || variant === 'discard'
        ? theme["white"]
        : theme["white"]
    };
  }
`;

export const DivAdd = styles.div`
    display: flex;
    flex-direction: row;
    justify-content: center
    align-items: center;
    padding: 20px;
    gap: 20px;
    margin-left:10%;

    color: ${props => props.theme["blue-300"]};
`

export const DivPlus = styles.div`
    display: flex;
    justify-content: center;    
    align-items: center;
  
    border-radius: 50%;
    border: 1px solid ${props => props.theme["blue-300"]};
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["blue-300"]};
    `

export const CourseSection = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 50px;
    gap: 8px;
    background-color:rgb(8, 43, 59);
    width: 70dvw;
    border-radius:5px;
    font-size:1.2rem;

    h2 {
    color: ${props => props.theme["blue-300"]};
    }
  
`
export const ModuleSection = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 50px;
    gap: 8px;
    background-color:rgb(0, 33, 48);
    width: 70dvw;
    border-radius:5px;
    font-size:1.2rem;

    h2 {
    color: ${props => props.theme["blue-300"]};
    }
`