import { useState } from "react";
import {
  Pyshark,
  pyshark,
  getpcap
} from "@/services/Reconnaissance/pyshark";

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Pyshark[]>([]);
  const [linkPcap, setLinkPcap] = useState<string>("");

  const pysharkModel = async (inf: string, packetCount: number, timeOut: number, protocolFilters: string) => {
    try {
      setLoading(true);
      const response = await pyshark(inf, packetCount, timeOut, protocolFilters);
      console.log(response);
      setData(response?.data?.details);
      setLinkPcap(response?.data?.url)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData([]);
    }
  }

  const getPcapAsync = async (link: string) => {
    try {
      setLoading(true);
      const response = await getpcap(link);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return {
    loading,
    setLoading,
    data,
    setData,
    linkPcap,
    setLinkPcap,

    pysharkModel,
    getPcapAsync,
  };
};
