import AuthModal from '@/components/modal/auth/Auth.modal';
import useAuthStore from '@/context/auth.context';
import { Button, Group } from '@mantine/core';
import React from 'react';
import ProfileMenu from './ProfileMenu';

interface AuthBtnProps {
  hideClass: string;
}

const AuthButtons: React.FC<AuthBtnProps> = ({ hideClass }) => {
  const { ModalOpenHandler } = useAuthStore();
  return (
    <Group position="right" spacing="sm" sx={{ width: 'max-content' }}>
      <Button
        variant="outline"
        radius="xl"
        size="sm"
        className={hideClass}
        onClick={() => ModalOpenHandler('Log In')}
      >
        Log In
      </Button>
      <Button
        variant="filled"
        radius="xl"
        size="sm"
        className={hideClass}
        onClick={() => ModalOpenHandler('Sign Up')}
      >
        Sign Up
      </Button>
      <ProfileMenu />
      <AuthModal />
    </Group>
  );
};
export default AuthButtons;
