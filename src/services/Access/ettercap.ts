import axios from '@/utils/axios';
import { ip } from '@/utils/ip';

export interface Ettercap {
  isAttackOk: boolean;
}

export const ettercap = async (payload: {
  iface: string;
  method: string;
  target1: string;
  target2: string;
  times: number;
}) => {
  // console.log(values);
  const res = await axios.post(`${ip}/attack/access/ettercap/`, payload);
  console.log(res);
  return res.data;
};

export const getpcap = async (link: string) => {
  console.log(link);
  const values = {
    file: link,
  };
  console.log(values);
  const res = await axios.get(`${ip}/attack/reconnaissance/pyshark/download/${link}`);
  console.log(res);
  return res.data;
};
