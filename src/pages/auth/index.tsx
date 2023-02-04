import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { login } from '@/services/Auth/auth';
import { Link, useModel } from 'umi';
import styles from './index.less';
import Title from 'antd/lib/typography/Title';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Login: React.FC = () => {
  const { initialState, setInitialState } = useModel('@@initialState');
  const { loading, setLoading, loginModel } = useModel('auth');

  const onFinish = (values: { username: string; password: string }) => {
    // console.log('Success:', values);
    console.log('Success:', values);
    loginModel({ username: values.username, password: values.password });
    setInitialState({
      ...initialState,
      currentUser: {
        hoDem: 'Nguyen',
        ten: 'Duc',
        systemRole: 'Admin',
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <Link to="/" className={styles.header}>
            <img alt="logo" className={styles.logo} src="/logo.png" />
            <Title level={1} className={styles.title}>Hệ thống tấn công mạng</Title>
          </Link>
        </div>

        <div className={styles.main}>
          <Form
            name="normal_login"
            className={styles.loginForm}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Nhập tài khoản!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Tài khoản" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Nhập mật khẩu!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Nhớ tài khoản</Checkbox>
              </Form.Item>

              <a className={styles.loginFormFogot} href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                Đăng nhập
              </Button>
              <a href="" className={styles.loginFormRegister}>Đăng ký</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
