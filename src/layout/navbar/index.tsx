import WhiteText from '@/assets/svg/reddit-white.svg';
import Face from '@/assets/svg/redditFace.svg';
import BlackText from '@/assets/svg/redditText.svg';
import { Box, createStyles, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import AuthButtons from './AuthButtons';
import SearchInput from './SearchInput';

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: '49px',
    background:
      theme.colorScheme === 'light' ? 'var(--white-clr)' : theme.colors.dark[7],
    display: 'flex',
    alignAitems: 'center',
    paddingInline: '30px',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingInline: '10px',
    },
  },

  logo: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      display: 'none',
    },
  },

  child: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '20px',
  },
}));

const Navigation: React.FC = () => {
  const mode = useMantineColorScheme();
  const dark = mode.colorScheme === 'dark';

  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.child}>
        <Box className="flex item-center">
          <Face width={34} />
          <Box className={classes.logo}>
            {dark ? <WhiteText width={75} /> : <BlackText width={75} />}
          </Box>
        </Box>
        <SearchInput />
        <Box className={classes.logo}>
          <AuthButtons />
        </Box>
      </Box>
    </Box>
  );
};
export default Navigation;
