import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const PysharkCheck = () => {
  const pyshark = useModel('reconnaissance.pyshark');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    pyshark.setData([]);
    pyshark.pysharkModel(
      values.inf,
      Number(values.packetCount),
      Number(values.timeOut),
      values.protocolFilters,
    );
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
        label="Interface"
        name="inf"
        rules={[{ required: true, message: 'Nhập interface!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Số lượng gói tin"
        name="packetCount"
        rules={[{ required: false, message: 'Nhập số lượng gói tin!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Thời gian"
        name="timeOut"
        rules={[{ required: false, message: 'Nhập thời gian' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Giao thức"
        name="protocolFilters"
        rules={[{ required: false, message: 'Nhập giao thức!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.itemForm}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.itemFormButton}
          loading={pyshark.loading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PysharkCheck;
