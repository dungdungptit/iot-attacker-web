import { Button, Spin, Table } from 'antd';
import PysharkCheck from './PysharkCheck';
import { ColumnsType } from 'antd/lib/table';
import { Pyshark } from '@/services/Reconnaissance/pyshark';
import { useModel } from 'umi';
import styles from './index.less';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import { ip } from '@/utils/ip';
import { useState } from 'react';

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

const PysharkGlobal = () => {
  const pyshark = useModel('reconnaissance.pyshark');
  const [page, setPage] = useState(1);

  return (
    <div className={styles.nmapGlobal}>
      <PysharkCheck />
      <Title level={2}>Kết quả</Title>
      <Spin spinning={pyshark.loading}>
        <Button type="primary" disabled={pyshark.linkPcap === ''} loading={pyshark.loading}>
          <a href={`${ip}/media/pcap/${pyshark.linkPcap}`} target={'_blank'} rel="noreferrer">
            Dowload file pcap
          </a>
        </Button>
        <Table
          columns={columns}
          // scroll={{ y: 800, x: 500 }}
          pagination={{
            current: page,
            total: pyshark.data.length,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            onChange: (current) => {
              setPage(current);
            },
          }}
          dataSource={pyshark.data.map((item, index) => {
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

export default PysharkGlobal;
