import React, { useState } from 'react';
import { PaddingContainer, FlexContainer, Heading, BlueText, ParaText, IconContainer } from '../styles/Global.styled';
import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { ShowcaseImageCard, ShowcaseParticleContainer, Particle } from '../styles/Showcase.style';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../utilis/Variants';
import { ButtonLink } from '../styles/Global.styled';
import { buttonVariants } from '../utilis/Variants';


import Afolabi from '../Assetss/Afolabi.png';
import Backgroundimg from '../Assetss/particle.png';
const Showcase = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300); // Reset after 300ms
    };

    return (
        <PaddingContainer 
            id='Home'
            left='3%'
            right='10%'
            top='18%'
            bottom='10%'
            responsiveLeft='1rem'
            responsiveRight='1rem'
            responsiveTop='8rem'
        >
            <FlexContainer align='center' fullWidthChild>
               { /*--left-content-- */}
               <motion.div
                   variants={fadeInLeftVariant}
                   initial="hidden"
                   whileInView="visible"
               >
                <Heading as='h4' size='h4'>
                    Hello
                </Heading>
                <Heading 
                    as='h2'
                    size='h2'
                    top='0.5rem'
                    bottom='1rem'
                >
                    Hi i'm <BlueText>Afolabi Adedeji</BlueText> 
                </Heading>
                <Heading as='h3' size='h3' >I'm a <BlueText>Frontend Developer</BlueText></Heading>

                <ParaText as='p' top='2rem'  bottom='4rem'>
                    Hi, my name is Afolabi Adedeji and i'm a front-end developer with over 2 years of experience in creating and designing user-friendly websites and web applications. <br />

                   <motion.a 
                       href="../Afolabi_Adedeji_CV.pdf" target='_blank' rel="noopener noreferrer"
                        download
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        onClick={handleClick}
                        style={{ display: 'inline-block', marginTop: '1rem' }}
                    >
                        <ButtonLink>
                            {clicked ? 'Downloading...' : 'Resume'}
                        </ButtonLink>
                    </motion.a>
                </ParaText>

                {/* --social-icons-- */}
                <FlexContainer gap="20px" responsiveFlex>
                    <IconContainer color='white' size='1.5rem'>
                        <BsLinkedin />

                    </IconContainer>
                    <IconContainer color='white' size='1.5rem'>
                        <BsWhatsapp />

                    </IconContainer>

                    <IconContainer color='white' size='1.5rem'>
                        <BsTwitter />

                    </IconContainer>
                    <IconContainer color='white' size='1.5rem'>
                        <BsGithub />

                    </IconContainer>

                </FlexContainer>
               </motion.div>
               
                 {/* --right-container-- */}
                 <FlexContainer justify='flex-end'
                    as={motion.div}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                 >
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={Afolabi} alt="afolabi Adedeji" />
                        </ShowcaseImageCard>
                        <Particle 
                            as={motion.img}
                            animate={{
                                x: [0, 100, 0],
                                rotate: 360,
                                scale: [1, 0.5, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity, 
                            }}
                            src={Backgroundimg}
                            alt='background image'
                            top='-80px'
                            left='20px'
                            rotate='60deg'
                        />
                        <Particle 
                              as={motion.img}
                              animate={{
                                  y: [0, 100, 0],
                                  rotate: 360,
                                  scale: [1, 0.8, 1]
                              }}
                              transition={{
                                  duration: 18,
                                  repeat: Infinity, 
                              }}
                            src={Backgroundimg}
                            alt='background image'
                            top='50px'
                            right='-70px'
                            rotate='0deg'
                        />
                        <Particle 
                              as={motion.img}
                              animate={{
                                  y: [0, -100, 0],
                                  rotate: 360,
                                  scale: [1, 0.9, 1]
                              }}
                              transition={{
                                  duration: 15,
                                  repeat: Infinity, 
                              }}
                            src={Backgroundimg}
                            alt='background image'
                            bottom='10px'
                            left='-70px'
                            rotate='50deg'
                        />
                    </ShowcaseParticleContainer>
                 </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase;