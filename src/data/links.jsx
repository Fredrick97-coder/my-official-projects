import { AiFillTwitterCircle } from 'react-icons/ai';
import { GoMarkGithub } from 'react-icons/go';
import { SiLinkedin } from 'react-icons/si';

export const headerLinks = [
  {
    icon: <GoMarkGithub color={'white'} size={18} />,
    href: 'https://github.com/Fredrick97-coder',
    className:
      'hover:bg-[#8b8686ad] rounded-md h-10 w-10 flex justify-center items-center',
  },
  {
    icon: <SiLinkedin color={'white'} size={18} />,
    href: 'https://www.linkedin.com/in/fredrick-otabil-6106371aa/',
    className:
      'hover:bg-[#8b8686ad] rounded-md h-10 w-10 flex justify-center items-center',
  },
  {
    icon: <AiFillTwitterCircle color={'white'} size={18} />,
    href: 'https://twitter.com/ClarkCoder',
    className:
      'hover:bg-[#8b8686ad] rounded-md h-10 w-10 flex justify-center items-center',
  },
];

export const cardLinks = [
  {
    name: 'reactNative',
    path: '/',
    active: true,
  },
  {
    name: 'expo',
    path: '/expo',
    active: false,
  },
  {
    name: 'web',
    path: '/web',
    active: false,
  },
];
