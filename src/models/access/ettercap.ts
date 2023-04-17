import { useState } from 'react';
import { Ettercap, ettercap } from '@/services/Access/ettercap';
import { Pyshark } from '@/services/Reconnaissance/pyshark';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Pyshark[]>([]);
  const [linkPcap, setLinkPcap] = useState<string>('');

  const ettercapModel = async (payload: {
    iface: string;
    method: string;
    target1: string;
    target2: string;
    times: number;
  }) => {
    try {
      setLoading(true);
      const response = await ettercap(payload);
      console.log(response);
      setData(response?.data?.details);
      setLinkPcap(response?.data?.url);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData([]);
    }
  };

  return {
    loading,
    setLoading,
    data,
    setData,
    linkPcap,

    ettercapModel,
  };
};
