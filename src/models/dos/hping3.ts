import { Hping3, hping3 } from '@/services/Dos/hping3';

import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [danhSach, setDanhSach] = useState<any[]>([]);

  const hping3Model = async (payload: any) => {
    try {
      setLoading(true);
      const response = await hping3(payload);
      const data = [
        {
          'id': 1,
          'before': [{ 'id': 1, 'port': '135', 'protocol': 'tcp', 'state': 'open', 'service': 'msrpc', 'reason': 'syn-ack' }, { 'id': 2, 'port': '139', 'protocol': 'tcp', 'state': 'open', 'service': 'netbios-ssn', 'reason': 'syn-ack' }, { 'id': 3, 'port': '445', 'protocol': 'tcp', 'state': 'open', 'service': 'microsoft-ds', 'reason': 'syn-ack' }, { 'id': 4, 'port': '3306', 'protocol': 'tcp', 'state': 'open', 'service': 'mysql', 'reason': 'syn-ack' }, { 'id': 5, 'port': '5357', 'protocol': 'tcp', 'state': 'open', 'service': 'wsdapi', 'reason': 'syn-ack' }, { 'id': 6, 'port': '7680', 'protocol': 'tcp', 'state': 'open', 'service': 'pando-pub', 'reason': 'syn-ack' }, { 'id': 7, 'port': '8000', 'protocol': 'tcp', 'state': 'open', 'service': 'http-alt', 'reason': 'syn-ack' }, { 'id': 8, 'port': '8828', 'protocol': 'tcp', 'state': 'open', 'service': 'unknown', 'reason': 'syn-ack' }, { 'id': 9, 'port': '8829', 'protocol': 'tcp', 'state': 'open', 'service': 'unknown', 'reason': 'syn-ack' }, { 'id': 10, 'port': '33060', 'protocol': 'tcp', 'state': 'open', 'service': 'mysqlx', 'reason': 'syn-ack' }, { 'id': 11, 'port': '49668', 'protocol': 'tcp', 'state': 'open', 'service': 'unknown', 'reason': 'syn-ack' }],
          'after': [{ 'id': 1, 'port': '135', 'protocol': 'tcp', 'state': 'open', 'service': 'msrpc', 'reason': 'syn-ack' }, { 'id': 2, 'port': '139', 'protocol': 'tcp', 'state': 'open', 'service': 'netbios-ssn', 'reason': 'syn-ack' }, { 'id': 3, 'port': '445', 'protocol': 'tcp', 'state': 'open', 'service': 'microsoft-ds', 'reason': 'syn-ack' }, { 'id': 4, 'port': '3306', 'protocol': 'tcp', 'state': 'open', 'service': 'mysql', 'reason': 'syn-ack' }, { 'id': 5, 'port': '5357', 'protocol': 'tcp', 'state': 'open', 'service': 'wsdapi', 'reason': 'syn-ack' }, { 'id': 6, 'port': '7680', 'protocol': 'tcp', 'state': 'open', 'service': 'pando-pub', 'reason': 'syn-ack' }, { 'id': 7, 'port': '8000', 'protocol': 'tcp', 'state': 'open', 'service': 'http-alt', 'reason': 'syn-ack' }, { 'id': 8, 'port': '8828', 'protocol': 'tcp', 'state': 'open', 'service': 'unknown', 'reason': 'syn-ack' }, { 'id': 9, 'port': '8829', 'protocol': 'tcp', 'state': 'open', 'service': 'unknown', 'reason': 'syn-ack' }, { 'id': 10, 'port': '33060', 'protocol': 'tcp', 'state': 'open', 'service': 'mysqlx', 'reason': 'syn-ack' }, { 'id': 11, 'port': '49668', 'protocol': 'tcp', 'state': 'open', 'service': 'unknown', 'reason': 'syn-ack' }]
        }
      ]
      // setDanhSach(data);
      setDanhSach(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      setDanhSach([]);
    }
  };

  return {
    loading,
    setLoading,
    danhSach,
    setDanhSach,

    hping3Model,
  };
};
