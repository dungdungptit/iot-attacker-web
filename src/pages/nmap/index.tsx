import { Spin, Table } from 'antd';
import NmapCheck from './NmapCheck';
import { ColumnsType } from 'antd/lib/table';
import { Nmap } from '@/services/Nmap/nmap';
import { useModel } from 'umi';
import styles from './index.less';

const columns: ColumnsType<Nmap> = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Port',
    dataIndex: 'port',
    key: 'port',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Protocol',
    dataIndex: 'protocol',
    key: 'protocol',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Service',
    key: 'service',
    dataIndex: 'service',
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

const data: Nmap[] = [
  {
    id: 1,
    port: '192.168.1.1',
    protocol: 'TCP',
    state: 'open',
    service: 'ssh',
  },
  {
    id: 2,
    port: '192.168.1.1',
    protocol: 'TCP',
    state: 'open',
    service: 'ssh',
  },
  {
    id: 3,
    port: '192.168.1.1',
    protocol: 'TCP',
    state: 'open',
    service: 'ssh',
  },
];
const NmapGlobal = () => {
  const nmap = useModel('nmap');

  return (
    <div className={styles.nmapGlobal}>
      <NmapCheck />
      <h3>Kết quả</h3>
      <Spin spinning={nmap.loading}>
        <Table columns={columns} dataSource={nmap.danhSach} />
      </Spin>
    </div>
  );
};

export default NmapGlobal;
