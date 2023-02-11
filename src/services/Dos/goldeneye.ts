import axios from "@/utils/axios";
import { ip } from "@/utils/ip";

export interface Goldeneye {
  isAttackOk: boolean
}

export const goldeneye = async () => {
  // console.log(values);
  const res = await axios.post(`${ip}/attack/dos/goldeneye/`);
  console.log(res);
  return res.data;
}
