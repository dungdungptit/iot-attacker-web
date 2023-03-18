import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const PysharkCheck = () => {
  const pyshark = useModel('reconnaissance.pyshark');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    pyshark.setData([]);
    pyshark.pysharkModel(values.inf, Number(values.packetCount), Number(values.timeOut), values.protocolFilters);
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
      <Form.Item label="Inf" name="inf" rules={[{ required: true, message: 'Nhập inf!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item label="Packet Count" name="packetCount" rules={[{ required: false, message: 'Nhập packet count!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item label="Time Out" name="timeOut" rules={[{ required: false, message: 'Nhập time out!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item label="Protocol Filters" name="protocolFilters" rules={[{ required: false, message: 'Nhập protocol filters!' }]} className={styles.itemForm}>
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

export default PysharkCheck;
