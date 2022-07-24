import ActionToggle from '@/components/ThemeSwitcher';
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div>
      <ActionToggle />
    </div>
  );
};
export default Navbar;
