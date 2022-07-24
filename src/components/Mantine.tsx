import { MantineProvider } from '@mantine/core';

interface MantineProps {
  children: React.ReactNode;
}

export const Mantine = ({ children }: MantineProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        // fontFamily: 'Noto Sans',
      }}
    >
      {children}
    </MantineProvider>
  );
};
