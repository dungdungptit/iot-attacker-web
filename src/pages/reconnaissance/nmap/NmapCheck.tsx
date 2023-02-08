import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const NmapCheck = () => {
  const nmap = useModel('reconnaissance.nmap');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    nmap.setDanhSach([]);
    nmap.nmapModel(values.ip, values.options);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      className={styles.formNmap}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="IP" name="ip" rules={[{ required: true, message: 'Nhập ip!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item label="Options" name="options" rules={[{ required: true, message: 'Nhập option!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.itemForm}>
        <Button type="primary" htmlType="submit" className={styles.itemFormButton}>
          Kiểm tra
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NmapCheck;
