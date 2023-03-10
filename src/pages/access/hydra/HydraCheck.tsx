import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const HydraCheck = () => {
  const hydra = useModel('access.hydra');

  // useEffect(() => {
  //   if (hydra.loading === false) {
  //     hydra.hydraModel('-L username.txt -P password.txt ssh://192.168.1.249:22');
  //   }
  // }, [hydra.loading]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    hydra.setData({
      textarray: [],
    });
    hydra.hydraModel(values.options);
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
        label="Options"
        name="options"
        rules={[{ required: true, message: 'Nhập options!' }]}
        className={styles.itemForm}
      >
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

export default HydraCheck;
