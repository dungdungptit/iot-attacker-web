import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const Hping3Check = () => {
  const hping3 = useModel('dos.hping3');

  // useEffect(() => {
  //   const options: string[] = ['-S', '-F', '-R', '-P', '-A', '-U'];
  //   if (hping3.loading === false) {
  //     const randomElement = options[Math.floor(Math.random() * options.length)];
  //     console.log('options', randomElement);
  //     hping3.hping3Model('192.168.1.249', randomElement);
  //   }
  // }, [hping3.loading]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    hping3.setDanhSach([]);
    hping3.hping3Model(values);
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
      id="form-hping3"
    >
      <Form.Item
        label="IP"
        name="ip"
        rules={[{ required: true, message: 'Nhập ip!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Options"
        name="options"
        rules={[{ required: true, message: 'Nhập option!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Số lần"
        name="solan"
        rules={[{ required: true, message: 'Nhập số lần!' }]}
        className={styles.itemForm}
      >
        <Input name="solan" type="number" />
      </Form.Item>
      <Form.Item
        label="Khoảng thời gian sau mỗi lần (giây)"
        name="thoigian"
        rules={[{ required: true, message: 'Nhập thời gian!' }]}
        className={styles.itemForm}
      >
        <Input name="thoigian" type="number" />
      </Form.Item>
      {/* <Form.Item
        label="Thời gian giữa mỗi lần (giây)"
        name="tgian"
        rules={[{ required: true, message: 'Nhập option!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.itemForm}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.itemFormButton}
          loading={hping3.loading}
        >
          Kiểm tra
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Hping3Check;
