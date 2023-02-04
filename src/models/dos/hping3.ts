import { Hping3, hping3 } from '@/services/Dos/hping3';

import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [danhSachTruoc, setDanhSachTruoc] = useState<Hping3[]>([]);
  const [danhSachSau, setDanhSachSau] = useState<Hping3[]>([]);

  const hping3Model = async (ipcheck: string) => {
    setLoading(true);
    const response = await hping3(ipcheck);
    setDanhSachTruoc(response.before);
    setDanhSachSau(response.after);
    setLoading(false);
  };

  return {
    loading,
    setLoading,
    danhSachTruoc,
    setDanhSachTruoc,
    danhSachSau,
    setDanhSachSau,

    hping3Model,
  };
};
