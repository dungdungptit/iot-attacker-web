import { useState } from "react";
import {
  Ettercap,
  ettercap,
} from "@/services/Access/ettercap";

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Ettercap>({
    isAttackOk: false,
  });

  const ettercapModel = async () => {
    try {
      setLoading(true);
      const response = await ettercap();
      console.log(response);
      setData({
        isAttackOk: true
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData({
        isAttackOk: false,
      });
    }
  }

  return {
    loading,
    setLoading,
    data,
    setData,

    ettercapModel,
  };
};
