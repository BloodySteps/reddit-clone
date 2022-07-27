import { Anchor, Button, Menu } from '@mantine/core';
import React from 'react';
import { AiFillCaretDown, AiOutlineUser } from 'react-icons/ai';
import { BiHelpCircle, BiShieldQuarter } from 'react-icons/bi';
import { BsCoin } from 'react-icons/bs';
import { FaBullhorn } from 'react-icons/fa';
import { SiCastro } from 'react-icons/si';

const noUsers = [
  {
    id: 1,
    Icon: FaBullhorn,
    text: 'Advertise on Reddit',
    link: 'https://accounts.reddit.com/adsregister?dest=https%3A%2F%2Fads.reddit.com%2F&referrer=https%3A%2F%2Fwww.reddit.com%2F&utm_source=d2x_consumer&utm_name=user_menu_cta',
  },
  {
    id: 2,
    Icon: BsCoin,
    text: 'Coins',
    link: 'https://www.reddit.com/coins',
  },
  {
    id: 3,
    Icon: BiShieldQuarter,
    text: 'Premium',
    link: 'https://www.reddit.com/premium',
  },

  {
    id: 5,
    Icon: SiCastro,
    text: 'Talks',
    link: 'https://www.reddit.com/talk',
  },

  {
    id: 7,
    Icon: BiHelpCircle,
    text: 'Help Center',
    link: 'https://www.reddithelp.com/hc/en-us',
  },
];

const ProfileMenu: React.FC = () => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button variant="default" size="xs" className="flex item-center">
          <AiOutlineUser fontSize="20px" />
          <AiFillCaretDown />
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {noUsers.map(({ id, Icon, text, link }) => (
          <Anchor key={id} href={link} target="_blank">
            <Menu.Item icon={<Icon size={16} />}>{text}</Menu.Item>
          </Anchor>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
export default ProfileMenu;
