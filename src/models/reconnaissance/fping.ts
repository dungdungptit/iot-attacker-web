import { Fping, fping } from '@/services/Reconnaissance/fping';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [danhSach, setDanhSach] = useState<Fping[]>([]);

  const fpingModel = async (ipcheck: string, options: string) => {
    setLoading(true);
    console.log(ipcheck, options);

    const response = await fping(ipcheck, options);
    setDanhSach(response.data);
    setLoading(false);
  };

  return {
    loading,
    setLoading,
    fpingModel,
    danhSach,

    setDanhSach,
  };
};
