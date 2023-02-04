import { Nmap, nmap } from '@/services/Nmap/nmap';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [danhSach, setDanhSach] = useState<Nmap[]>([]);

  const nmapModel = async (ipcheck: string) => {
    setLoading(true);
    const response = await nmap(ipcheck);
    setDanhSach(response.data);
    setLoading(false);
  };

  return {
    loading,
    setLoading,
    nmapModel,
    danhSach,

    setDanhSach,
  };
};
