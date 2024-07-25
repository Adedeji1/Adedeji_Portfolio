import React from "react";
import { FlexContainer, Heading, BlueText, ParaText, IconContainer, PaddingContainer } from '../styles/Global.styled';
import { SkillsCardContainer, SkillsCard } from "../styles/MySkills.style";
import { Skills } from "../utilis/Data";
import { motion } from "framer-motion";
import { fadeInLeftVariant, fadeInRightVariant } from "../utilis/Variants";

const MySkills = () => {
    return (
        <>
            <PaddingContainer id="Skills" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
                <FlexContainer
                 fullWidthChild
                  responsiveFlex
                  responsiveDirection="column-reverse"
                >
                    <SkillsCardContainer 
                        as={motion.div}
                        variants={fadeInLeftVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        {Skills.map((skill) => (
                            <div key={skill.id}>                               
                               <SkillsCard>
                                    <IconContainer size="5rem" color="blue">
                                        {skill.icon}
                                    </IconContainer>
                                    <Heading as="h4" size="h4">
                                    {skill.tech}
                                    </Heading>
                                </SkillsCard>
                            </div>
                        ))}
                    </SkillsCardContainer>

                    <motion.div 
                        variants={fadeInRightVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <Heading as="h4" size="h4">
                            MY SKILLS
                        </Heading>


                        <Heading as="h2" size="h2" top="0.5rem">
                            what <BlueText>I can do</BlueText>
                        </Heading>

                        <ParaText top="2rem" bottom="1.5rem">
                            As a Developer, I have a wide reange of experience in front-end development. I am proficient in Javascript, React, TypeScript, HTML, and CSS. My strong experience in building responsive and dynamic user interfaces in React has allowed me to create engaging and interactive web applications.
                        </ParaText>

                        <ParaText>
                            I have experience in using React for building scaleable and  maintaining applications. This has allowed me to create efficient and sustainable code that can adept tp the changing needs of a business
                        </ParaText>
                    </motion.div>
                </FlexContainer>
            </PaddingContainer>
        </>
    );
}

export default MySkills;
