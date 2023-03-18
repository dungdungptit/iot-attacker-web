import { ip } from '@/utils/ip';
import axios from '@/utils/axios';

export interface Fping {
  id: number;
  host: string;
  status: string;
}

export const fping = async (ipcheck: string, options: string) => {
  const values = {
    ips: ipcheck,
    options: options,
  };
  const res = await axios.post(`${ip}/attack/reconnaissance/fping/`, values);
  console.log(res.data);
  return res.data;
};
