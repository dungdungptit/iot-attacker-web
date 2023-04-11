import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const GoldeneyecapCheck = () => {
  const goldeneye = useModel('dos.goldeneye');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    goldeneye.goldeneyeModel(values);
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
      <Form.Item
        label="Url"
        name="url"
        rules={[{ required: true, message: 'Nhập url!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Workers" name="workers" className={styles.itemForm}>
        <Input />
      </Form.Item>
      <Form.Item label="Sockets" name="sockets" className={styles.itemForm}>
        <Input />
      </Form.Item>
      <Form.Item label="Method" name="method" className={styles.itemForm}>
        <Input />
      </Form.Item>
      <Form.Item label="Thời gian" name="thoigian" className={styles.itemForm}>
        <Input />
      </Form.Item>
      <Form.Item label="Số lần" name="solan" className={styles.itemForm}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.itemForm}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.itemFormButton}
          loading={goldeneye.loading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GoldeneyecapCheck;
