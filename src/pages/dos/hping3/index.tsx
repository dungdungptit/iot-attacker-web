import { Divider, Spin, Table } from 'antd';
import Hping3Check from './Hping3Check';
import { ColumnsType } from 'antd/lib/table';
import { Hping3 } from '@/services/Dos/hping3';
import { useModel } from 'umi';
import styles from './index.less';
import Title from 'antd/lib/typography/Title';

const columns: ColumnsType<Hping3> = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    render: (value, item, index) => `${index + 1}`,
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

const data: Hping3[] = [
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
const Hping3Global = () => {
  const hping3 = useModel('dos.hping3');

  return (
    <div className={styles.nmapGlobal}>
      <Hping3Check />
      <Spin spinning={hping3.loading}>
        <Title level={2}>Kết quả trước tấn công</Title>
        <Table columns={columns} dataSource={hping3.danhSachTruoc} />
        <Divider />
        <Title level={2}>Kết quả sau tấn công</Title>
        <Table columns={columns} dataSource={hping3.danhSachSau} />
      </Spin>
    </div>
  );
};

export default Hping3Global;
