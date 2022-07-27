import useAuthStore from '@/context/auth.context';
import { Modal, Text, Anchor, Box } from '@mantine/core';
import React from 'react';
import AuthInputs from './AuthInputs';

const AuthModal: React.FC = () => {
  const { view, isOpen, ModalCloseHandler } = useAuthStore();

  return (
    <>
      <Modal
        opened={isOpen}
        onClose={ModalCloseHandler}
        centered
        lockScroll={false}
        title={
          <Box mb={19}>
            <Text size="xl">{view}</Text>
            <Text size="sm" mt="xs">
              By continuing, you agree to our{' '}
              <Anchor
                target="_blank"
                href="https://www.redditinc.com/policies/user-agreement"
              >
                User Agreement
              </Anchor>{' '}
              and{' '}
              <Anchor
                target="_blank"
                href="https://www.reddit.com/policies/privacy-policy"
              >
                Privacy Policy
              </Anchor>{' '}
            </Text>
          </Box>
        }
      >
        <AuthInputs />
      </Modal>
    </>
  );
};
export default AuthModal;
