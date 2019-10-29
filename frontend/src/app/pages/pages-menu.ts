import { NbMenuItem, NbIconLibraries  } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'CONTENT',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/starter',
  },
  {
    title: 'Robot Communication',
    icon: 'home-outline',
    link: '/pages/robot',
  },
  {
    title: 'Connect',
    icon: 'home-outline',
    link: '/pages/connect',
  },
  {
    title: 'DeviceManagement',
    icon: 'home-outline',
    link: '/pages/devicemanagement',
  },
  {
    title: 'RobotManagement',
    icon: 'home-outline',
    link: '/pages/robotmanagement',
  },
  // {
  //   title: 'Auth',
  //   // icon: 'lock-outline',
  //   icon: 'home-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
  {
    title: '',
    group: true,
  },
];
