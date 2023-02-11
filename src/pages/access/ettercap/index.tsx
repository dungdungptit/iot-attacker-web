import { Divider, Spin, Table } from 'antd';
import EttercapCheck from './EttercapCheck';
import { ColumnsType } from 'antd/lib/table';
import { Ettercap } from '@/services/Dos/hping3';
import { useModel } from 'umi';
import styles from './index.less';
import Title from 'antd/lib/typography/Title';


const EttercapGlobal = () => {
  const ettercap = useModel('access.ettercap');

  return (
    <Spin spinning={ettercap.loading}>
      <div className={styles.nmapGlobal}>
        <EttercapCheck />
        {/* <Title level={2}>Kết quả</Title> */}
        {/* {JSON.stringify(ettercap.data.isAttackOk)} */}
      </div>
    </Spin>
  );
};

export default EttercapGlobal;
