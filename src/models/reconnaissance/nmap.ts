import { Nmap, nmap } from '@/services/Reconnaissance/nmap';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [danhSach, setDanhSach] = useState<[Nmap[]]>([[]]);
  const [page, setPage] = useState(new Array(100).fill(1));

  const nmapModel = async (paypoad: any) => {
    // setLoading(true);
    // const response = await nmap(ipcheck, options);
    // setDanhSach(response.data);
    // setLoading(false);
    try {
      setLoading(true);
      const response = await nmap(paypoad);
      setDanhSach(response.data);
      console.log(page);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setDanhSach([[]]);
    }
  };

  return {
    loading,
    setLoading,
    nmapModel,
    danhSach,
    page,
    setPage,

    setDanhSach,
  };
};
