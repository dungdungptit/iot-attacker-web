import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  primaryColor: '#CC0D00',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  headerTheme: 'dark',
  title: 'Hệ thống giả lập tấn công mạng',
  pwa: false,
  logo: './favicon.ico',
  iconfontUrl: '',
};

export default Settings;
