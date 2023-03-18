import { ip } from '@/utils/ip';
import axios from '@/utils/axios';

export interface Nmap {
  id: number;
  port: string;
  protocol: string;
  state: string;
  service: string;
  reason: string;
}

export const nmap = async (payload: any) => {
  const res = await axios.post(`${ip}/attack/reconnaissance/nmap/`, payload);
  console.log(res.data);
  return res.data;
};
