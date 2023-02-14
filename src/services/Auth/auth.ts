import axios from '@/utils/axios';
import { ip } from '@/utils/ip';
import { Login } from './typings';

export const login = async (payload: { username: string; password: string }) => {
  const res = await axios.post(`${ip}/auth/token/login/`, payload);
  return res;
};

export async function getInfo(username: string) {
  return axios.get(`${ip}/users/current/${username}`);
}

export async function getInfoAdmin() {
  return axios.get(`${ip}/users/current/`);
}
