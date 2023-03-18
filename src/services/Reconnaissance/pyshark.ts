import { ip } from '@/utils/ip';
import axios from '@/utils/axios';

export interface Pyshark {
  id: number;
  source: string;
  dest: string;
  ipSource: string;
  ipDest: string;
  length: number;
  protocol: string;
  info: string;
}

export const pyshark = async (inf: string, packetCount: number, timeOut: number, protocolFilters: string) => {
  const values = {
    infs: inf,
    packetCount: packetCount,
    timeOut: timeOut,
    protocolFilters: protocolFilters,
  };
  console.log(values);
  const res = await axios.post(`${ip}/attack/reconnaissance/pyshark/`, values);
  console.log(res.data);
  return res.data;
}

export const getpcap = async (link: string) => {
  console.log(link);
  const values = {
    file: link
  };
  console.log(values);
  const res = await axios.get(`${ip}/attack/reconnaissance/pyshark/download/${link}`);
  console.log(res);
  return res.data;
}

