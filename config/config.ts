// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 220,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // enable: true,
    default: 'vi-VN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: false,
    // baseSeparator: '_',
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/admin/login',
      layout: false,
      hideInMenu: true,
      name: 'login',
      component: './user/Login/adminlogin',
    },
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './auth',
        },

        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './user/register',
        },
        {
          component: '404',
        },
      ],
    },
    {
      hideInMenu: true,
      name: 'account',
      icon: 'user',
      path: '/account',
      routes: [
        {
          name: 'center',
          icon: 'smile',
          path: '/account/center',
          component: './account/center',
        },
      ],
    },
    // {
    //   name: 'Nmap',
    //   icon: 'EyeOutlined',
    //   path: '/nmap',
    //   component: './nmap',
    // },
    {
      name: 'Dos',
      icon: 'StopOutlined',
      path: '/dos',
      routes: [
        {
          name: 'Hping3',
          icon: 'WifiOutlined',
          path: '/dos/hping3',
          component: './dos/hping3',
        },
        // {
        //   name: 'GoldenEye',
        //   icon: 'WifiOutlined',
        //   path: '/dos/goldeneye',
        //   // component: './dos/goldeneye',
        // },
      ],
    },
    {
      name: 'Reconnaissance',
      icon: 'SwapOutlined',
      path: '/reconnaissance',
      routes: [
        {
          name: 'Nmap',
          icon: 'EyeOutlined',
          path: '/reconnaissance/nmap',
          component: './reconnaissance/nmap',
        },
        {
          name: 'Pyshark',
          icon: 'WifiOutlined',
          path: '/reconnaissance/pyshark',
          component: './reconnaissance/pyshark',
        },
        {
          name: 'Fping',
          icon: 'WifiOutlined',
          path: '/reconnaissance/fping',
          component: './reconnaissance/fping',
        },
      ],
    },
    {
      name: 'AccessAttack',
      icon: 'KeyOutlined',
      path: '/access-attack',
      routes: [
        {
          name: 'EterCap',
          icon: 'WifiOutlined',
          path: '/access-attack/ettercap',
          component: './access/ettercap',
        },
        {
          name: 'Sqlmap',
          icon: 'WifiOutlined',
          path: '/access-attack/sqlmap',
          component: './access/sqlmap',
        },
        {
          name: 'Hydra',
          icon: 'WifiOutlined',
          path: '/access-attack/hydra',
          component: './access/hydra',
        },
      ],
    },
    {
      name: 'Phising',
      icon: 'MailOutlined',
      path: '/phising',
      routes: [
        {
          name: 'SocialEngineerToolkit',
          icon: 'WifiOutlined',
          path: '/phising/social-engineer-toolkit',
          // component: './reconnaissance/pyshark',
        },
      ],
    },
    // {
    //   name: 'XSS',
    //   icon: 'EditOutlined',
    //   path: '/xss',
    //   routes: [
    //     {
    //       name: 'Dvpwa',
    //       icon: 'WifiOutlined',
    //       path: '/xss/dvpwa',
    //       // component: './xss/dvpwa',
    //     },
    //   ],
    // },
    {
      layout: false,
      path: '/kichhoattaikhoan',
      component: './KichHoatTaiKhoan',
      hideInMenu: true,
      access: 'thiSinhChuaKichHoat',
    },
    {
      layout: false,
      path: '/verifycccd',
      component: './VerifyCCCD',
      hideInMenu: true,
      access: 'thiSinhChuaKichHoat',
    },

    {
      path: '/',
      redirect: '/user/login',
    },
    {
      component: '404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},

  nodeModulesTransform: {
    type: 'none',
  },
  // mfsu: {},
  webpack5: {},
  exportStatic: {},
});
