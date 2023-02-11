import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const EttercapCheck = () => {
  const ettercap = useModel('access.ettercap');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    ettercap.setData({
      isAttackOk: false,
    });
    ettercap.ettercapModel();
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
        <Button type="primary" htmlType="submit" className={styles.itemFormButton}>
          Launch EtterCap GUI
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EttercapCheck;
