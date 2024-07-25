import styled from "styled-components";

const SkillsCardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 2rem;
    padding: 0 5%;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: block;
        padding: 0;
    }
`;
const SkillsCard = styled.div`
    width: 230px;
    border: 1px solid #fff;
    padding: 3rem 0;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.primary_light};
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
       width: 100%;
       margin-top: 2rem;
    }

`;
export { SkillsCardContainer, SkillsCard};
