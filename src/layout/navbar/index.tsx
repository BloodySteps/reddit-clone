import ThemeSwitcher from '@/components/ThemeSwitcher';
import React from 'react';
import SearchInput from './SearchInput';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div>
      <ThemeSwitcher />
      <SearchInput />
    </div>
  );
};
export default Navbar;
