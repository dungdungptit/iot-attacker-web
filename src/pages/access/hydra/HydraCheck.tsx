import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const HydraCheck = () => {
  const hydra = useModel('access.hydra');

  // useEffect(() => {
  //   if (hydra.loading === false) {
  //     hydra.hydraModel('-L username.txt -P password.txt ssh://192.168.1.249:22');
  //   }
  // }, [hydra.loading]);

  const [loaitancong, setLoaitancong] = React.useState('ssh');
  const [cuongdo, setCuongdo] = React.useState('lientuc');

  const onFinish = (values: any) => {
    console.log('Success:', values);
    hydra.setData({
      textarray: [],
    });
    const form = document.getElementById('form-hydra');
    const formData = new FormData(form);
    formData.append('loaitancong', loaitancong);
    formData.append('cuongdo', cuongdo);
    hydra.hydraForm(formData);
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
      id="form-hydra"
    >
      <Form.Item
        label="Ip"
        name="ip"
        rules={[{ required: true, message: 'Nhập ip!' }]}
        className={styles.itemForm}
      >
        <Input name="ip" />
      </Form.Item>
      <Form.Item
        label="Options"
        name="options"
        rules={[{ required: true, message: 'Nhập option!' }]}
        className={styles.itemForm}
      >
        <Input name="options" />
      </Form.Item>
      <Form.Item name="username" label="Username File" className={styles.itemForm}>
        <Input type="file" name="username" />
      </Form.Item>
      <Form.Item name="password" label="Password File" className={styles.itemForm}>
        <Input type="file" name="password" />
      </Form.Item>
      <Form.Item label="Loại tấn công" name="loaitancong" className={styles.itemForm}>
        {/* <Input name="loaitancong" /> */}
        <Select
          defaultValue="ssh"
          onChange={(value) => {
            setLoaitancong(value);
          }}
          options={[
            { label: 'SSH, Telnet', value: 'ssh' },
            { label: 'Web server', value: 'http-post-form' },
          ]}
        />
      </Form.Item>
      {loaitancong === 'http-post-form' && (
        <Form.Item
          label="Đường dẫn đăng nhập"
          name="pathlogin"
          rules={[{ required: true, message: 'Nhập đường dẫn!' }]}
          className={styles.itemForm}
        >
          <Input name="pathlogin" />
        </Form.Item>
      )}

      <Form.Item label="Cường độ" name="cuongdo" className={styles.itemForm}>
        <Select
          defaultValue="lientuc"
          onChange={(value) => {
            setCuongdo(value);
          }}
          options={[
            { label: 'Liên tục', value: 'lientuc' },
            { label: 'Theo chu kỳ', value: 'theochuky' },
          ]}
        />
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }} className={styles.itemForm}>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.itemFormButton}
          loading={hydra.loading}
        >
          Kiểm tra
        </Button>
      </Form.Item>
    </Form>
  );
};

export default HydraCheck;
