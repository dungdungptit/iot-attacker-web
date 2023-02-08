import axios from '@/utils/axios';
import { ip } from '@/utils/ip';

export interface Hping3 {
  id: number;
  port: string;
  protocol: string;
  state: string;
  service: string;
  reason: string;
}

export const hping3 = async (ipcheck: string, options: string) => {
  const values = {
    ip: ipcheck,
    options: options,
  };
  const res = await axios.post(`${ip}/attack/dos/hping3/`, values);
  console.log(res.data);
  return res.data;
};
