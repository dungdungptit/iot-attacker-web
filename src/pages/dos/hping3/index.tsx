import { Divider, Spin, Table } from 'antd';
import Hping3Check from './Hping3Check';
import { ColumnsType } from 'antd/lib/table';
import { Hping3 } from '@/services/Dos/hping3';
import { useModel } from 'umi';

const columns: ColumnsType<Hping3> = [
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
    <div>
      <Hping3Check />
      <h3>Kết quả</h3>
      <Spin spinning={hping3.loading}>
        <h3>Trước tấn công</h3>
        <Table columns={columns} dataSource={hping3.danhSachTruoc} />
        <Divider />
        <h3>Sau tấn công</h3>
        <Table columns={columns} dataSource={hping3.danhSachSau} />
      </Spin>
    </div>
  );
};

export default Hping3Global;
