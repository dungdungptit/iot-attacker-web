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
      <Form.Item label="Target Type" name="targetType" rules={[{ required: true, message: 'Nhập target type!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item label="Target Destination" name="targetDestination" rules={[{ required: true, message: 'Nhập target destination!' }]} className={styles.itemForm}>
        <Input />
      </Form.Item>

      <Form.Item label="Options" name="options" rules={[{ required: true, message: 'Nhập options!' }]} className={styles.itemForm}>
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

export default SqlmapCheck;
