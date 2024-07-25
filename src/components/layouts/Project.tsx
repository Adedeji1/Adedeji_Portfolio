import React from "react";
import { motion } from "framer-motion";
import { PaddingContainer, Heading, FlexContainer, ParaText, IconContainer, Button, } from "../../styles/Global.styled";
import { FaGithub } from "react-icons/fa";
import Project1 from '../../Assetss/weatherapp.png';
import { TechStackCard, ProjectImageContainer, ProjectImage } from "../../styles/MyProject.styled";
import { fadeInLeftVariant, fadeInRightVariant } from "../../utilis/Variants";

interface ProjectProps {
    data: {
        project_name: string;
        tech_stack: string[];
        project_desc: string;
        project_img: string;
        project_url: string;
        reverse: boolean;
    }
}
const Project: React.FC<ProjectProps> = ({ data }) => {
    return(
        <FlexContainer 
            direction={data.reverse ? 'row-reverse' : undefined}
            fullWidthChild>
            <motion.div
                variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
            >
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                       {data.project_name}
                    </Heading>

                    <IconContainer color="blue" size="2rem">
                        <FaGithub />

                    </IconContainer>
                </FlexContainer>
                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">
                        {data.tech_stack.map((stack: string) => (
                            <TechStackCard>{stack}</TechStackCard>
                        ))}
                    </FlexContainer>
                </PaddingContainer>
                
                <ParaText top="1.5rem" bottom="2rem">
                    {data.project_desc}
                </ParaText>
                <Button>Visit Website</Button>
            </motion.div>
           {/* --right-section-project-image-- */}
            <ProjectImageContainer 
             as={motion.div}
             variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant}
             initial="hidden"
             whileInView="visible"
             justify={data.reverse ? "flex-start" : "flex-end"}
            >
                <ProjectImage src={data.project_img} alt={data.project_name}/>
            </ProjectImageContainer>
        </FlexContainer>
    )
}

export default Project;