import GlobalFooter from '@/components/GlobalFooter';
import Header from '@/components/Header';
import { resendEmail } from '@/services/ant-design-pro/api';
import data from '@/utils/data';
import { Button, Card, Spin } from 'antd';
import Countdown from 'antd/lib/statistic/Countdown';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { history, useModel } from 'umi';

const KichHoatTaiKhoan: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const { initialState, setInitialState } = useModel('@@initialState');
  const deadline = Date.now() + 1000 * time;
  const onFinish = () => {
    setLoading(false);
  };
  const availableAfter = initialState?.currentUser?.emailVerify?.availableAfter;

  const handleSubmit = async () => {
    const response = await resendEmail();
    const now = new Date();
    const diffS = moment(response?.data?.emailVerify?.availableAfter).diff(moment(now), 'second');
    if (moment(now).isBefore(moment(response?.data?.emailVerify?.availableAfter))) {
      setTime(diffS);
      setLoading(true);
    }
  };
  useEffect(() => {
    const verifiedCCCD = initialState?.currentUser?.cmtCccd !== undefined;
    const verifiedEmail = initialState?.currentUser?.emailVerify?.verified;
    if (initialState?.currentUser?.emailVerify?.verified === true && verifiedCCCD) {
      history.push(data?.path?.[initialState?.currentUser?.systemRole || 'guest'] ?? '/');
    } else if (verifiedEmail && !verifiedCCCD) {
      history.push('/verifycccd');
    }
    if (availableAfter) {
      const now = new Date();
      const diffS = moment(availableAfter).diff(moment(now), 'second');
      if (moment(now).isBefore(moment(availableAfter))) {
        setTime(diffS);
        setLoading(true);
      }
    }
  }, [
    availableAfter,
    initialState?.currentUser?.emailVerify?.verified,
    initialState?.currentUser?.systemRole,
    initialState?.currentUser?.cmtCccd,
  ]);
  return (
    <Spin spinning={false}>
      <Header />
      <Card
        style={{
          width: '500px',
          margin: '50px auto',
          textAlign: 'center',
          boxShadow: '0 1px 2px -2px rgb(0, 0, 0, 0.1), 0 3px 6px 0 rgb(0, 0, 0, 0.05)',
        }}
      >
        <p>T??i kho???n email: {initialState?.currentUser?.email} ch??a ???????c k??ch ho???t</p>
        {!loading && (
          <p>
            N???u ch??a nh???n ???????c mail k??ch ho???t, vui l??ng b???m v??o{' '}
            <a href="#" onClick={handleSubmit}>
              ????y
            </a>{' '}
            ????? g???i l???i mail k??ch ho???t
          </p>
        )}
        {loading && (
          <p>
            Mail k??ch ho???t ??ang ???????c g???i ??i. Vui l??ng ?????i:{' '}
            <Countdown
              value={deadline}
              format="mm:ss gi??y"
              valueStyle={{ fontWeight: 'bold' }}
              onFinish={onFinish}
            />{' '}
            ????? g???i l???i
          </p>
        )}
        <p style={{ color: '#CC0D00' }}>
          <i>L??u ??: Th?? sinh ki???m tra c??? h???p th?? r??c/spam</i>
        </p>

        <Button
          onClick={() => {
            setInitialState({ ...initialState, currentUser: undefined });
            localStorage.removeItem('vaiTro');
            localStorage.removeItem('token');
            localStorage.removeItem('accessTokens');
            localStorage.removeItem('phuongThuc');
            localStorage.removeItem('dot');
            localStorage.removeItem('nam');
            history.push({
              pathname: '/user/login',
            });
          }}
          type="primary"
        >
          ????ng nh???p
        </Button>
      </Card>

      <GlobalFooter />
    </Spin>
  );
};

export default KichHoatTaiKhoan;
