import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useModel } from 'umi';
import styles from './index.less';

const FormBackdoor = () => {
  const backdoorModel = useModel('access.backdoor');

  const [selectedFile, setSelectedFile] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = document.getElementById('formbackdoor');
    const formData = new FormData(form);
    // print form data
    for (const value of formData.values()) {
      console.log(value);
    }
    backdoorModel.up({ formData }).then(() => {
      backdoorModel.getData();
    });
  };

  const handleFileSelect = (event) => {
    if (event.target.files?.length < 1) {
      return;
    }
    const files = event.target.files;
    const filesChecked = [];
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      filesChecked.push(file);
    }
    setSelectedFile([...filesChecked]);
  };

  return (
    <Form name="upload" className={styles.form} layout="inline" id="formbackdoor">
      <Form.Item name="file" label="Files" required>
        <Input type="file" name="file" onChange={handleFileSelect} multiple={true} />
      </Form.Item>
      <Button type="primary" onClick={handleSubmit} loading={backdoorModel.loading}>
        Upload
      </Button>
    </Form>
  );
};

export default FormBackdoor;
