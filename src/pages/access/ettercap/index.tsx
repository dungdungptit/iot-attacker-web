import { Button, Divider, Spin, Table } from 'antd';
import EttercapCheck from './EttercapCheck';
import { ColumnsType } from 'antd/lib/table';
import { Ettercap } from '@/services/Dos/hping3';
import { useModel } from 'umi';
import styles from './index.less';
import Title from 'antd/lib/typography/Title';
import { ip } from '@/utils/ip';
import { useState } from 'react';

const EttercapGlobal = () => {
  const ettercap = useModel('access.ettercap');

  const columns: ColumnsType<Pyshark> = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
      // render stt tu 1 den n
      // render: (value, item, index) => `${index + 1}`,
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Dest',
      dataIndex: 'dest',
      key: 'dest',
    },
    {
      title: 'Ip Source',
      dataIndex: 'ipSource',
      key: 'ipSource',
    },
    {
      title: 'Ip Dest',
      dataIndex: 'ipDest',
      key: 'ipDest',
    },
    {
      title: 'Length',
      dataIndex: 'length',
      key: 'length',
    },
    {
      title: 'Protocol',
      dataIndex: 'protocol',
      key: 'protocol',
    },
    {
      title: 'Info',
      dataIndex: 'info',
      key: 'info',
    },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Detail</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  const [page, setPage] = useState(1);

  return (
    <div className={styles.nmapGlobal}>
      <EttercapCheck />
      <Title level={2}>Kết quả</Title>
      <Spin spinning={ettercap.loading}>
        <Button type="primary" disabled={ettercap.linkPcap === ''} loading={ettercap.loading}>
          <a href={`${ip}/media/pcap/${ettercap.linkPcap}`} target={'_blank'} rel="noreferrer">
            Dowload file pcap
          </a>
        </Button>
        <Table
          columns={columns}
          // scroll={{ y: 800, x: 500 }}
          pagination={{
            current: page,
            total: ettercap.data.length,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            onChange: (current) => {
              setPage(current);
            },
          }}
          dataSource={ettercap.data.map((item, index) => {
            return {
              ...item,
              index: (page - 1) * 10 + index + 1,
              key: index,
            };
          })}
        />
      </Spin>
    </div>
  );
};

export default EttercapGlobal;
