import useAuthStore from '@/context/auth.context';
import { Box } from '@mantine/core';
import React from 'react';
import Login from './Login';

const AuthInputs: React.FC = () => {
  const { view } = useAuthStore();

  return <Box pb="sm">{view === 'Log In' && <Login />}</Box>;
};
export default AuthInputs;
