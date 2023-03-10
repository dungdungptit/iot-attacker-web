import axios from '@/utils/axios';
import { ip } from '@/utils/ip';

export const login = async (payload: { username: string; password: string }) => {
  const res = await axios.post(`${ip}/auth/token/login/`, payload);
  return res;
};

export async function getInfo() {
  return axios.get(`${ip}/auth/users/me/`);
}

export async function getInfoAdmin() {
  return axios.get(`${ip}/auth/users/me/`);
}
