import axios from "@/utils/axios";
import { ip } from "@/utils/ip";

export interface Hydra {
  textarray: string[]
}

export const hydra = async (options: string) => {
  const values = {
    "options": options,
  }
  // console.log(values);
  const res = await axios.post(`${ip}/attack/access/hydra/`, values);
  return res.data;
}
