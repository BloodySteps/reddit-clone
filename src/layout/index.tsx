import { Box } from '@mantine/core';
import Router from 'next/router';

import { ReactNode, useEffect, useState } from 'react';
import Navbar from './navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isHide, setIsHide] = useState<boolean>(false);

  useEffect(
    () => (Router.pathname !== '/404' ? setIsHide(true) : setIsHide(false)),
    [],
  );

  return (
    <>
      {isHide && <Navbar />}
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
