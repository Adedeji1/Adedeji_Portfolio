import React, { useState, FormEvent } from 'react';
import { PaddingContainer, Heading, BlueText, FlexContainer, Button } from '../styles/Global.styled';
import { ContactForm, FormLabel, FormInput } from '../styles/Footer.styled';
import { motion } from 'framer-motion';
import { fadeInBottomVariant } from '../utilis/Variants';
import Notification from '../utilis/Notification';

const Footer: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' }>({ message: '', type: 'success' });

  const onFinish = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/afolabiadedeji351@gmail.com", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }

      setNotification({ message: "Form submitted successfully!", type: 'success' });
      window.location.reload();
    } catch (error) {
      if (error instanceof TypeError) {
        setNotification({ message: "Network error occurred. Please check your Internet connection", type: 'error' });
      } else {
        setNotification({ message: "Failed to submit form, please try again.", type: 'error' });
      }
      console.error("Failed to submit form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ message: '', type: 'success' })}
        />
      )}
      <PaddingContainer id="Contact" top="5%" bottom="10%">
        <Heading
          as={motion.h4}
          variants={fadeInBottomVariant}
          initial='hidden'
          whileInView='visible'
          size='h4'
          align='center'
        >
          MY CONTACT
        </Heading>

        <Heading
          as={motion.h2}
          variants={fadeInBottomVariant}
          initial='hidden'
          whileInView='visible'
          size="h2"
          align="center"
          top="0.5rem"
        >
          Contact <BlueText>Me Here</BlueText>
        </Heading>

        <PaddingContainer top="3rem">
          <FlexContainer justify="center">
            <ContactForm
              as={motion.form}
              variants={fadeInBottomVariant}
              initial='hidden'
              whileInView='visible'
              onSubmit={onFinish}
            >
              <PaddingContainer bottom="2rem">
                <FormLabel>Name:</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </PaddingContainer>

              <PaddingContainer bottom="2rem">
                <FormLabel>Email:</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </PaddingContainer>

              <PaddingContainer bottom="2rem">
                <FormLabel>Message:</FormLabel>
                <FormInput
                  as="textarea"
                  name="message"
                  placeholder="Leave a message"
                />
              </PaddingContainer>

              <FlexContainer justify='center' responsiveFlex>
                <Button as="button" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </FlexContainer>
            </ContactForm>
          </FlexContainer>
        </PaddingContainer>
      </PaddingContainer>
    </>
  );
};
export default Footer;