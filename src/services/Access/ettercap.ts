import axios from "@/utils/axios";
import { ip } from "@/utils/ip";

export interface Ettercap {
  isAttackOk: boolean
}

export const ettercap = async () => {
  // console.log(values);
  const res = await axios.get(`${ip}/attack/access/ettercap/`);
  console.log(res);
  return res.data;
}
