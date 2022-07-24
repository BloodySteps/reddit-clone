import React from 'react';
import { Group, Button } from '@mantine/core';
import ProfileMenu from './ProfileMenu';

const AuthButtons: React.FC = () => {
  return (
    <Group position="right" spacing="sm">
      <Button variant="outline" radius="xl" size="sm">
        Login
      </Button>
      <Button variant="filled" radius="xl" size="sm">
        Signup
      </Button>
      <ProfileMenu />
    </Group>
  );
};
export default AuthButtons;
