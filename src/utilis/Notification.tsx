import React from 'react';
import styled from 'styled-components';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const NotificationContainer = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 15px;
  background-color: ${({ type }) => (type === 'success' ? 'green' : 'red')};
  color: white;
  border-radius: 5px;
  z-index: 1000;
  opacity: 0.9;
`;

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  return (
    <NotificationContainer type={type} onClick={onClose}>
      {message}
    </NotificationContainer>
  );
};
export default Notification;