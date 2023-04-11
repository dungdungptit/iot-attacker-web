import { Goldeneye, goldeneye } from '@/services/Dos/goldeneye';
import { message } from 'antd';

import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);

  const goldeneyeModel = async (payload: any) => {
    try {
      setLoading(true);
      const response = await goldeneye(payload);
      console.log(response);
      setLoading(false);
      message.success('Goldeneye attack success');
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,

    goldeneyeModel,
  };
};
