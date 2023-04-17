import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const SqlmapCheck = () => {
  const sqlmap = useModel('access.sqlmap');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    sqlmap.setData({
      textarray: [],
    });
    sqlmap.sqlmapModel(values.targetType, values.targetDestination, values.options);
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
        label="Loại mục tiêu"
        name="targetType"
        rules={[{ required: true, message: 'Nhập loại mục tiêu!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Mục tiêu"
        name="targetDestination"
        rules={[{ required: true, message: 'Nhập mục tiêu!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

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
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SqlmapCheck;
