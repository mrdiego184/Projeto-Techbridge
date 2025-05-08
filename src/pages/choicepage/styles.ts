import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    height: 100vh;
    background-color: ${props => props.theme["gray-900"]};
`
export const Title = styled.h1` 
    font-size: 2rem;
    color: ${props => props.theme["gray-100"]};
    margin-bottom: 2rem;
`
export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
    background-color: ${props => props.theme["blue-700"]};
    color: ${props => props.theme["gray-100"]};
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${props => props.theme["blue-300"]};
    }
`
