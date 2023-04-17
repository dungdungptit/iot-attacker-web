import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const NmapCheck = () => {
  const nmap = useModel('reconnaissance.nmap');
  const [loaitancong, setLoaitancong] = React.useState('-sT');

  // useEffect(() => {
  //   const options: string[] = ['-d', '-dd', '-Pn', '-sU', '-s0'];
  //   if (nmap.loading === false) {
  //     const randomElement = options[Math.floor(Math.random() * options.length)];
  //     console.log('options', randomElement);
  //     nmap.nmapModel('192.168.1.249', randomElement);
  //   }
  // }, [nmap.loading]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    nmap.setDanhSach([]);
    nmap.nmapModel(values);
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
        label="IP"
        name="ip"
        rules={[{ required: true, message: 'Nhập ip!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>

      {/* <Form.Item
        label="Options"
        name="options"
        rules={[{ required: true, message: 'Nhập option!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item> */}
      <Form.Item
        label="Loại tấn công"
        name="options"
        rules={[{ required: true, message: 'Nhập option!' }]}
        className={styles.itemForm}
      >
        <Input />
      </Form.Item>
      {/* <Form.Item label="Loại tấn công" name="loaitancong" className={styles.itemForm}>
        <Select
          defaultValue="-sT"
          onChange={(value) => {
            setLoaitancong(value);
          }}
          options={[
            { label: 'TCP Connect Scan', value: '-sT' },
            { label: 'TCP SYN Scan', value: '-sS' },
            { label: 'UDP Scan', value: '-sU' },
            { label: 'TCP Null Scan', value: '-sN' },
            { label: 'FIN Scan', value: '-sF' },
            { label: 'TCP ACK Scan', value: '-sA' },
            { label: 'OS Dectection scan', value: '-O' },
          ]}
        />
      </Form.Item> */}
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
          loading={nmap.loading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NmapCheck;
