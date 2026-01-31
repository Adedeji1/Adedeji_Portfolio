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
                            I’m a frontend developer experienced in building
                             responsive and interactive web applications using 
                             Next.js, React, TypeScript, JavaScript, HTML, CSS,
                             and Tailwind CSS. I enjoy 
                             turning designs into functional interfaces, focusing 
                             on clean structure, reusable components, and user-friendly
                             interactions.
                        </ParaText>

                        <ParaText>
                            I build scalable and maintainable applications
                             with React and Next.js, focusing on clean 
                             component structure, efficient code, and solutions
                              that can grow with changing business needs.
                        </ParaText>
                    </motion.div>
                </FlexContainer>
            </PaddingContainer>
        </>
    );
}

export default MySkills;
