import { Divider, Spin, Table } from 'antd';
import GoldeneyeCheck from './GoldeneyeCheck';
import { ColumnsType } from 'antd/lib/table';
import { Goldeneye } from '@/services/Dos/hping3';
import { useModel } from 'umi';
import styles from './index.less';
import Title from 'antd/lib/typography/Title';

const huongdan: string = `USAGE: python3 ./device_attack/tools/DDoS/GoldenEye/goldeneye.py <url> [OPTIONS]

OPTIONS:
   Flag           Description                     Default
   -u, --useragents   File with user-agents to use                     (default: randomly generated)
   -w, --workers      Number of concurrent workers                     (default: 50)
   -s, --sockets      Number of concurrent sockets                     (default: 30)
   -m, --method       HTTP Method to use 'get' or 'post'  or 'random'  (default: get)
   -d, --debug        Enable Debug Mode [more verbose output]          (default: False)
   -n, --nosslcheck   Do not verify SSL Certificate                    (default: True)
   -h, --help         Shows this help`;

const GoldeneyeGlobal = () => {
  // const goldeneye = useModel('dos.goldeneye');

  return (
    <div className={styles.nmapGlobal}>
      <GoldeneyeCheck />
      <Title level={2}>Hướng dẫn</Title>
      <div className={styles.huongdan}>
        <pre className={styles.huongdanText}>
          {huongdan}
        </pre>
      </div>
    </div>
  );
};

export default GoldeneyeGlobal;
