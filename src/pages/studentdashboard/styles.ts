import styled from "styled-components";
// Section/ Div do card
export const CardSection = styled.div`
    margin-top: 3%;
    max-width: 1900px;
    padding: 2rem 5%;
    margin: 0 auto;
    flex-wrap: wrap;
    
`
// Listamento dos cards
export const CardList = styled.ul`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    gap: 2rem;
    padding: 0;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); 
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr; 
    }
`
