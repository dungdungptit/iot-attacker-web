import React from 'react';
import { Typography, Layout } from 'antd';
import logo from '@/assets/logo.png';
import styles from './index.less';
const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography;

const Welcome: React.FC = () => (
  <Layout className={styles.layout}>
    <Content className={styles.content}>
      <div className={styles.textBanner}>
        <Title>
          Chào mừng đến hệ thống giả lập tấn công mạng phục vụ đào tạo An toàn thông tin
        </Title>
      </div>
      <div className={styles.imgBanner}>
        <img src={logo} height={500} alt="Học viện Công nghệ Bưu chính viễn thông" />
      </div>
    </Content>
    <Footer className={styles.footer}> Học viện Công nghệ Bưu chính viễn thông ©2023</Footer>
  </Layout>
);

export default Welcome;
