import styled from "styled-components";
import { theme } from "../utilis/Theme";

interface PaddingContainerProps {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    align?: string;
    responsiveTop?: string;
    responsiveBottom?: string;
    responsiveLeft?: string;
    responsiveRight?: string;
}
interface FlexContainerProps {
    justify?: string;
    align?: string;
    gap?: string;
    direction?: string;
    fullWidthChild?: boolean;
    reverse?: boolean;
    responsiveFlex?: boolean;
    responsiveDirection?: string;
}
interface HeadingProps extends PaddingContainerProps {
    align?: string;
    size?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
}
interface IconContainerProps {
    size?: string;
}

const MainBody = styled.div`
  background-color: ${( {theme} ) => theme.colors.primary};
`;

const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;
`;

const PaddingContainer = styled.div<PaddingContainerProps>`
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left }) => left};
    padding-right: ${({ right }) => right};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        padding-top: ${({ responsiveTop }) => responsiveTop};
        padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
        padding-left: ${({ responsiveLeft }) => responsiveLeft};
        padding-right: ${({ responsiveRight }) => responsiveRight};
    }
`;

const FlexContainer = styled.div<FlexContainerProps>`
   display: flex;
   justify-content: ${({ justify }) => justify};
   align-items: ${({ align }) => align};
   gap: ${({ gap }) => gap};
   flex-direction: ${({ direction }) => direction};

   & > div{
    flex: ${({ fullWidthChild }) => fullWidthChild ? 1 : 'initial'};
   }

   @media(max-width: ${({ theme }) => theme.breakpoints.mobile }){
    display: ${({ responsiveFlex }) => responsiveFlex ? 'flex': 'block'};
    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
   }
`;

const Heading = styled(PaddingContainer)<HeadingProps>`
   color: ${({ theme }) => theme.colors.white};
   text-align: ${({ align }) => align};
   font-size: ${({ size }) =>{
    switch(size){
        case 'h1':
            return '4.5rem';
        case 'h2':
            return '3rem';
        case 'h3':
            return '2rem';
        case 'h4':
            return '1.3rem';
        default:
            return;
    }
   }};

   @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: ${({ size }) =>{
    switch(size){
        case 'h1':
            return '2.5rem';
        case 'h2':
            return '2rem';
        case 'h3':
            return '1.5rem';
        case 'h4':
            return '1rem';
        default:
            return;
    }
    }};
   }
`;

const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
const ParaText = styled(PaddingContainer)`
    color: ${({ theme }) => theme.colors.para_text_color};
    line-height: 2rem;
`;
const IconContainer = styled.div<IconContainerProps>`
    font-size: ${({ size }) => size};
    cursor: pointer;
    color: ${({ color, theme }) => {
        switch(color){
            case 'white':
                return theme.colors.white;
            case 'blue':
                return theme.colors.secondary;   
            default:
            return;    
        }
    }}
`;

const Button = styled.button`
    display: inline-block;
    width: max-content;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.white };
    background-color: ${({ theme }) => theme.colors.primary_light };
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        color: ${({theme}) => theme.colors.primary_light};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
const ButtonLink = styled.a`
    display: inline-block;
    width: max-content;
    text-decoration: none;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.white };
    background-color: ${({ theme }) => theme.colors.secondary_light };
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        color: ${({theme}) => theme.colors.primary_light};
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
export { MainBody, Container, PaddingContainer, FlexContainer, Heading, BlueText, ParaText, IconContainer, Button, ButtonLink};  