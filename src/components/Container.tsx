import { Container } from '@mantine/core';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

const AppContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Container sx={{ border: '2px solid red', width: '100%' }} size="xl">
      {children}
    </Container>
  );
};
export default AppContainer;
