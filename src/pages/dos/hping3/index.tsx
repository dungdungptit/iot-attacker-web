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

const huongdan: string = `usage: hping3 host [options]
-h  --help      show this help
-v  --version   show version
-c  --count     packet count
-i  --interval  wait (uX for X microseconds, for example -i u1000)
    --fast      alias for -i u10000 (10 packets for second)
    --faster    alias for -i u1000 (100 packets for second)
    --flood      sent packets as fast as possible. Don't show replies.
-n  --numeric   numeric output
-q  --quiet     quiet
-I  --interface interface name (otherwise default routing interface)
-V  --verbose   verbose mode
-D  --debug     debugging info
-z  --bind      bind ctrl+z to ttl           (default to dst port)
-Z  --unbind    unbind ctrl+z
    --beep      beep for every matching packet received
Mode
default mode     TCP
-0  --rawip      RAW IP mode
-1  --icmp       ICMP mode
-2  --udp        UDP mode
-8  --scan       SCAN mode.
                 Example: hping --scan 1-30,70-90 -S www.target.host
-9  --listen     listen mode
IP
-a  --spoof      spoof source address
--rand-dest      random destionation address mode. see the man.
--rand-source    random source address mode. see the man.
-t  --ttl        ttl (default 64)
-N  --id         id (default random)
-W  --winid      use win* id byte ordering
-r  --rel        relativize id field          (to estimate host traffic)
-f  --frag       split packets in more frag.  (may pass weak acl)
-x  --morefrag   set more fragments flag
-y  --dontfrag   set don't fragment flag
-g  --fragoff    set the fragment offset
-m  --mtu        set virtual mtu, implies --frag if packet size > mtu
-o  --tos        type of service (default 0x00), try --tos help
-G  --rroute     includes RECORD_ROUTE option and display the route buffer
--lsrr           loose source routing and record route
--ssrr           strict source routing and record route
-H  --ipproto    set the IP protocol field, only in RAW IP mode
ICMP
-C  --icmptype   icmp type (default echo request)
-K  --icmpcode   icmp code (default 0)
    --force-icmp send all icmp types (default send only supported types)
    --icmp-gw    set gateway address for ICMP redirect (default 0.0.0.0)
    --icmp-ts    Alias for --icmp --icmptype 13 (ICMP timestamp)
    --icmp-addr  Alias for --icmp --icmptype 17 (ICMP address subnet mask)
    --icmp-help  display help for others icmp options
UDP/TCP
-s  --baseport   base source port             (default random)
-p  --destport   [+][+]<port> destination port(default 0) ctrl+z inc/dec
-k  --keep       keep still source port
-w  --win        winsize (default 64)
-O  --tcpoff     set fake tcp data offset     (instead of tcphdrlen / 4)
-Q  --seqnum     shows only tcp sequence number
-b  --badcksum   (try to) send packets with a bad IP checksum
                 many systems will fix the IP checksum sending the packet
                 so you'll get bad UDP/TCP checksum instead.
-M  --setseq     set TCP sequence number
-L  --setack     set TCP ack
-F  --fin        set FIN flag
-S  --syn        set SYN flag
-R  --rst        set RST flag
-P  --push       set PUSH flag
-A  --ack        set ACK flag
-U  --urg        set URG flag
-X  --xmas       set X unused flag (0x40)
-Y  --ymas       set Y unused flag (0x80)
--tcpexitcode    use last tcp->th_flags as exit code
--tcp-mss        enable the TCP MSS option with the given value
--tcp-timestamp  enable the TCP timestamp option to guess the HZ/uptime
Common
-d  --data       data size                    (default is 0)
-E  --file       data from file
-e  --sign       add 'signature'
-j  --dump       dump packets in hex
-J  --print      dump printable characters
-B  --safe       enable 'safe' protocol
-u  --end        tell you when --file reached EOF and prevent rewind
-T  --traceroute traceroute mode              (implies --bind and --ttl 1)
--tr-stop        Exit when receive the first not ICMP in traceroute mode
--tr-keep-ttl    Keep the source TTL fixed, useful to monitor just one hop
--tr-no-rtt       Don't calculate/show RTT information in traceroute mode
ARS packet description (new, unstable)
--apd-send       Send the packet described with APD (see docs/APD.txt)`;

const Hping3Global = () => {
  const hping3 = useModel('dos.hping3');

  return (
    <div className={styles.nmapGlobal}>
      <Hping3Check />
      <Title level={2}>Hướng dẫn</Title>
      <div className={styles.huongdan}>
        <pre className={styles.huongdanText}>
          {huongdan}
        </pre>
      </div>
      <Title level={2}>Kết quả trước tấn công</Title>
      <Spin spinning={hping3.loading}>
        <Table columns={columns} dataSource={hping3.danhSachTruoc} />
      </Spin>
      <Divider />
      <Title level={2}>Kết quả sau tấn công</Title>
      <Spin spinning={hping3.loading}>
        <Table columns={columns} dataSource={hping3.danhSachSau} />
      </Spin>
    </div>
  );
};

export default Hping3Global;
