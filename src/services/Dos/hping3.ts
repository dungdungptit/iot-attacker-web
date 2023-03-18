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

export const hping3 = async (payload: any) => {
  const res = await axios.post(`${ip}/attack/dos/hping3/`, payload);
  console.log(res.data);
  return res.data;
};
