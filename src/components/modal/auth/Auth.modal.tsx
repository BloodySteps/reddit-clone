import React from 'react';
import { Modal, Button, Group, Text } from '@mantine/core';
import useAuthStore from '@/context/auth.context';
import AuthInputs from './AuthInputs';

const AuthModal: React.FC = () => {
  const { view, isOpen, ModalCloseHandler } = useAuthStore();

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={ModalCloseHandler}
        title={
          <>
            <Text size="xl">{view}</Text>
            <Text size="xs" mt="xs">
              By continuing, you agree to our User Agreement and Privacy Policy.
            </Text>
          </>
        }
      >
        <AuthInputs />
      </Modal>
    </>
  );
};
export default AuthModal;
