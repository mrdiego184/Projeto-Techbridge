import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    padding-bottom: 4rem;
    gap: 50px;
`

export const Title = styled.p`
    font-size: 24px;
    font-weight: bold;
`

export const DivUser = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    gap: 50px;
    width: 100%;
`

export const NomeAuluno = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: white;
`

export const Status = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.theme["orange-300"]};
    background-color: ${props => props.theme["gray-700"]};
    border: 1px solid ${props => props.theme["orange-300"]};
    border-radius: 4px;    
    padding: 10px;
        `

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme["blue-700"]};`