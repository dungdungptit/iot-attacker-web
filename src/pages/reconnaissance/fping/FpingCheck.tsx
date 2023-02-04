import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const FpingCheck = () => {
  const nmap = useModel('nmap');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    nmap.setDanhSach([]);
    nmap.nmapModel(values.ip);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      className={styles.formFping}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Ips" name="ips" rules={[{ required: true, message: 'Nhập ip!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Options" name="options" rules={[{ required: true, message: 'Nhập option!' }]}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Kiểm tra
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FpingCheck;
