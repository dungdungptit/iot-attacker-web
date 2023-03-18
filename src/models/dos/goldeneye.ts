import { Goldeneye, goldeneye } from '@/services/Dos/goldeneye';

import { useState } from 'react';

export default () => {
  const [loading, setLoading] = useState<boolean>(false);

  const goldeneyeModel = async () => {
    try {
      setLoading(true);
      const response = await goldeneye();
      console.log(response);
      setLoading(false);
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
