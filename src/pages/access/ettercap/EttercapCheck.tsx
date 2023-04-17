import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const EttercapCheck = () => {
  const ettercap = useModel('access.ettercap');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    if (!values?.times) {
      values.times = 1;
    }
    ettercap.ettercapModel(values);
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.itemForm}>
        <Form.Item
          label="Interface"
          name="iface"
          rules={[{ required: true, message: 'Nhập interface!' }]}
          className={styles.itemForm}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Method"
          name="method"
          rules={[{ required: true, message: 'Nhập method!' }]}
          className={styles.itemForm}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mục tiêu 1"
          name="target1"
          rules={[{ required: true, message: 'Nhập mục tiêu 1!' }]}
          className={styles.itemForm}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mục tiêu 2"
          name="target2"
          rules={[{ required: true, message: 'Nhập mục tiêu 2!' }]}
          className={styles.itemForm}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Thời gian tấn công" name="times" className={styles.itemForm}>
          <InputNumber min={1} max={60} defaultValue={1} />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.itemFormButton}
          loading={ettercap.loading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EttercapCheck;
