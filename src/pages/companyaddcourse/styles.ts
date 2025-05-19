import styles, { styled } from 'styled-components';

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
`

export const Label = styles.label`
text-align: left;
    font-weight: bold;
    margin: 10px 0;
`

export const Input = styles.input`
    width: 100%;
    padding: 8px;
    border: 1px solid ${props => props.theme["gray-600"]};
    border-radius: 4px;
    background-color: ${props => props.theme["gray-600"]};
`

export const InputDescricao = styles.input`
    width: 100%;
    height: 100px;
    padding: 8px;
    border: 1px solid ${props => props.theme["gray-600"]};
    background-color: ${props => props.theme["gray-600"]};
    border-radius: 4px;
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

export const DivConfig = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    padding: 10px;
    gap: 8px;
`