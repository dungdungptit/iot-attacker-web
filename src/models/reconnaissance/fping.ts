import { Fping, fping } from '@/services/Reconnaissance/fping';
import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [danhSach, setDanhSach] = useState<Fping[]>([]);

  const fpingModel = async (ipcheck: string, options: string) => {
    try {
      setLoading(true);
      console.log(ipcheck, options);

      const response = await fping(ipcheck, options);
      setDanhSach(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setDanhSach([]);
    }
  };

  return {
    loading,
    setLoading,
    fpingModel,
    danhSach,

    setDanhSach,
  };
};
