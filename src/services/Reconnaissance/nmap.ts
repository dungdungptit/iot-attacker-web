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

export const nmap = async (ipcheck: string, options: string) => {
  const values = {
    ip: ipcheck,
    options: options,
  };
  const res = await axios.post(`${ip}/attack/reconnaissance/nmap/`, values);
  console.log(res.data);
  return res.data;
};
