import { useState } from "react";
import {
  Sqlmap,
  sqlmap,
} from "@/services/Access/sqlmap";

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Sqlmap>({
    textarray: [],
  });

  const sqlmapModel = async (targetType: string, targetDestination: string, options: string) => {
    try {
      setLoading(true);
      const response = await sqlmap(targetType, targetDestination, options);
      console.log(response?.data);
      setData({
        textarray: response?.data,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData({
        textarray: [],
      });
    }
  }

  return {
    loading,
    setLoading,
    data,
    setData,

    sqlmapModel,
  };
};
