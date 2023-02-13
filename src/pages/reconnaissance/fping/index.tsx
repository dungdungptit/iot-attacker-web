import { Spin, Table } from 'antd';
import FpingCheck from './FpingCheck';
import { ColumnsType } from 'antd/lib/table';
import { Fping } from '@/services/Reconnaissance/fping';
import { useModel } from 'umi';
import styles from './index.less';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import { useState } from 'react';

const columns: ColumnsType<Fping> = [
  {
    title: 'STT',
    dataIndex: 'id',
    key: 'id',
    // render: (value, item, index) => `${index + 1}`,
  },
  {
    title: 'Port',
    dataIndex: 'host',
    key: 'host',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Protocol',
    dataIndex: 'status',
    key: 'status',
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

const huongdan =
  `
Trường Ip có thể nhập nhiều địa chỉ IP hoặc tên miền, mỗi địa chỉ IP hoặc tên miền cách nhau bởi dấu cách.
Ví dụ:
Ips: 192.168.1.1 192.168.1.221  google.com facebook.com
Options: -4 -c
Trường Options có thể nhập các tùy chọn sau:
* Tùy Chọn Thăm Dò:
-4,   --ipv4                 Chỉ ping đến các địa chỉ IPv4
-6,   --ipv6                 Chỉ ping đến các địa chỉ IPv6
-b,   --size=BYTES           Lượng dữ liệu để ping (byte) (Mặc định: 56)
-B,   --backoff=N            Đặt hệ số dự phòng hàm mũ thành N (Mặc định: 1.5)
-c,   --count=N              Chế độ đếm: gửi N ping đến từng mục tiêu
-f,   --file=FILE            Đọc danh sách các mục tiêu từ một file
-g,   --generate             Tạo danh sách mục tiêu (chỉ khi không có -f được chỉ định)
                             (Cung cấp IP bắt đầu và kết thúc trong danh sách đích hoặc địa chỉ CIDR)
                             (Ví dụ: fping -g 192.168.1.0 192.168.1.255 hoặc fping -g 192.168.1.0/24)
-H,   --ttl=N                Đặt giá trị IP TTL (Time To Live hops)
-I,   --iface=IFACE          Liên kết với một giao diện cụ thể
-l,   --loop                 loop mode: send pings forever
-m,   --all                  use all IPs of provided hostnames (e.g. IPv4 and IPv6), use with -A
-M,   --dontfrag             set the Don't Fragment flag
-O,   --tos=N                set the type of service (tos) flag on the ICMP packets
-p,   --period=MSEC          interval between ping packets to one target (in ms)
                             (in loop and count modes, Mặc định: 1000 ms)
-r,   --retry=N              number of retries (Mặc định: 3)
-R,   --random               random packet data (to foil link data compression)
-S,   --src=IP               set source address
-t,   --timeout=MSEC         individual target initial timeout (Mặc định: 500 ms,
                             except with -l/-c/-C, where it's the -p period up to 2000 ms)>

* Tùy Chọn Đầu Ra:
-a,   --alive                show targets that are alive
-A,   --addr                 show targets by address
-C,   --vcount=N             same as -c, report results in verbose format
-d,   --rdns                 show targets by name (force reverse-DNS lookup)
-D,   --timestamp            print timestamp before each output line
-e,   --elapsed              show elapsed time on return packets
-i,   --interval=MSEC        interval between sending ping packets (Mặc định: 10 ms)
-n,   --name                 show targets by name (reverse-DNS lookup for target IPs)
-N,   --netdata              output compatible for netdata (-l -Q are required)
-o,   --outage               show the accumulated outage time (lost packets * packet interval)
-q,   --quiet                quiet (don't show per-target/per-ping results)
-Q,   --squiet=SECS          same as -q, but add interval summary every SECS seconds
-s,   --stats                print final stats
-u,   --unreach              show targets that are unreachable
-v,   --version              show version
-x,   --reachable=N          shows if >=N hosts are reachable or not`

const FpingGlobal = () => {
  const fping = useModel('reconnaissance.fping');
  const [page, setPage] = useState(1);

  return (
    <div className={styles.nmapGlobal}>
      <FpingCheck />
      <Title level={2}>Hướng dẫn</Title>
      <div className={styles.huongdan}>
        <pre className={styles.huongdanText}>
          {huongdan}
        </pre>
      </div>
      <Title level={2}>Kết quả</Title>
      <Spin spinning={fping.loading}>
      <Table columns={columns}
          pagination={{
            current: page,
            total: fping.danhSach.length,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
            onChange: (current) => {
              setPage(current);
            }
          }}
          dataSource={fping.danhSach.map((item, index) => {
            return {
              ...item,
              index: (page - 1) * 10 + index + 1,
            };
          })}
        />
      </Spin>
    </div>
  );
};

export default FpingGlobal;
