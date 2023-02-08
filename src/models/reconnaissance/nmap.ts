import { Nmap, nmap } from '@/services/Reconnaissance/nmap';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [danhSach, setDanhSach] = useState<Nmap[]>([]);

  const nmapModel = async (ipcheck: string, options: string) => {
    // setLoading(true);
    // const response = await nmap(ipcheck, options);
    // setDanhSach(response.data);
    // setLoading(false);
    try {
      setLoading(true);
      const response = await nmap(ipcheck, options);
      setDanhSach(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setDanhSach([]);
    }
  };

  return {
    loading,
    setLoading,
    nmapModel,
    danhSach,

    setDanhSach,
  };
};
