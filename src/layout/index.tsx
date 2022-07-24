import { Box } from '@mantine/core';
import Router from 'next/router';

import { ReactNode, useEffect, useState } from 'react';
import Navbar from './navbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [isHide, setIsHide] = useState<Boolean>(false);

  useEffect(
    () => (Router.pathname !== '/404' ? setIsHide(true) : setIsHide(false)),
    [],
  );

  return (
    <Box>
      <Box>
        {isHide && <Navbar />}
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
