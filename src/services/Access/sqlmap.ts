import axios from "@/utils/axios";
import { ip } from "@/utils/ip";

export interface Sqlmap {
  textarray: string[]
}

export const sqlmap = async (targetType: string, targetDestination: string, options: string) => {
  const values = {
    "targetType": targetType,
    "targetDestination": targetDestination,
    "options": options,
  }
  // console.log(values);
  const res = await axios.post(`${ip}/attack/access/sqlmap/`, values);
  return res.data;
}
