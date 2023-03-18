import axios from '@/utils/axios';
import { ip } from '@/utils/ip';

export const get = async (payload: any) => {
  const res = await axios.get(`${ip}/attack/access/backdoor/`, payload);
  return res.data;
};

export async function deleteFile(payload: { filename: string }) {
  const filename = payload?.filename;
  return axios.delete(`${ip}/attack/access/backdoor/${filename}/delete/`);
}
