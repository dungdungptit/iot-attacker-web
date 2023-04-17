import TableBase from '@/components/Table';
import { IBackdoorRecord } from '@/models/access/backdoor';
import { IUserRecord } from '@/models/users';
import { IColumn } from '@/utils/interfaces';
import { EyeOutlined, DeleteOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons';
import {
  Divider,
  List,
  Spin,
  Table,
  Typography,
  Form,
  Upload,
  UploadFile,
  Button,
  Input,
} from 'antd';
import React, { useState } from 'react';
import { useAccess, useModel } from 'umi';
import styles from './index.less';
import FormBackdoor from './FormBackdoor';
import FormUser from './FormUser';
import { ip } from '@/utils/ip';

const DlpMain = () => {
  const backdoorModel = useModel('access.backdoor');
  const access = useAccess();

  const handleDownload = (record: IBackdoorRecord) => {
    console.log(record);
    window.open(`${ip}/media/backdoor/${record.filename}`);
  };

  const renderLast = (value: any, record: IBackdoorRecord) => (
    <React.Fragment>
      <Button
        type="primary"
        shape="circle"
        icon={<EyeOutlined />}
        title="Xem chi tiết"
        onClick={() => handleDownload(record)}
      />
      {access.adminVaStaff && (
        <React.Fragment>
          <Divider type="vertical" />
          <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            title="Xóa"
            onClick={() => {
              backdoorModel.deleteRecord(record).then(() => {
                backdoorModel.getData();
              });
            }}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );

  const columns: IColumn<IBackdoorRecord>[] = [
    {
      title: 'STT',
      dataIndex: 'index',
      width: 80,
      align: 'center',
    },
    {
      title: 'Filename',
      dataIndex: 'name',
      search: 'search',
      notRegex: true,
      width: 200,
      align: 'center',
    },

    {
      title: 'Thao tác',
      align: 'center',
      render: (value: any, record: IBackdoorRecord) => renderLast(value, record),
      fixed: 'right',
      width: 100,
    },
  ];

  return (
    // <Spin spinning={ettercap.loading}>
    <div className={styles.nmapGlobal}>
      <TableBase
        modelName={'access.backdoor'}
        title="Danh sách hướng dẫn tạo mã độc và thực hiện tấn công backdoor"
        columns={columns}
        hascreate={access.adminVaStaff ? true : false}
        formType={'Drawer'}
        dependencies={[backdoorModel.page, backdoorModel.limit, backdoorModel.condition]}
        widthDrawer={800}
        getData={backdoorModel.getData}
        Form={FormBackdoor}
        noCleanUp={true}
        params={{
          page: backdoorModel.page,
          limit: backdoorModel.limit,
          condition: backdoorModel.condition,
        }}
        maskCloseableForm={true}
        otherProps={{
          scroll: {
            x: 1000,
          },
        }}
      />
    </div>
    // </Spin>
  );
};

export default DlpMain;
