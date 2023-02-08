import { Divider, Spin, Table } from 'antd';
import SqlmapCheck from './SqlmapCheck';
import { ColumnsType } from 'antd/lib/table';
import { Sqlmap } from '@/services/Dos/hping3';
import { useModel } from 'umi';
import styles from './index.less';
import Title from 'antd/lib/typography/Title';

const renderPreText = (text: string[]) => {
  return (
    <pre className={styles.huongdanText}>
      {text.map((item) => (
        <p>{item}</p>
      ))}
    </pre>
  );
};

const SqlmapGlobal = () => {
  const sqlmap = useModel('access.sqlmap');

  return (
    <div className={styles.nmapGlobal}>
      <SqlmapCheck />
      <Title level={2}>Kết quả</Title>
      <Spin spinning={sqlmap.loading}>
        <div className={styles.huongdan}>
          {sqlmap.data.textarray.length > 0 ? renderPreText(sqlmap.data.textarray) : (<p>Chưa có kết quả</p>)}
        </div>
      </Spin>
    </div>
  );
};

export default SqlmapGlobal;
