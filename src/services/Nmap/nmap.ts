import { ip } from '@/utils/ip';
import axios from '@/utils/axios';

export interface Nmap {
  id: number;
  port: string;
  protocol: string;
  state: string;
  service: string;
}

export const nmap = async (ipcheck: string) => {
  const values = {
    ip: ipcheck,
  };
  const res = await axios.post(`${ip}/attack/nmap/`, values);
  console.log(res.data);
  return res.data;
};
