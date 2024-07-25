import styled from "styled-components";

interface ParticleProps {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    align?: string;
    rotate?: string;
}
const ShowcaseParticleContainer = styled.div`
    position: relative;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: none;
    }
`;
const ShowcaseImageCard = styled.div`
    border: 1px solid white;
    width: max-content;
    padding-top: 2rem;
    border-radius: 1px;
    position: relative;
    overflow: hidden;
`;

const Particle = styled.img<ParticleProps>`
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    bottom: ${({ bottom }) =>  bottom};
    transform: rotate(${({ rotate }) => rotate});
`;

export { ShowcaseImageCard, ShowcaseParticleContainer, Particle}