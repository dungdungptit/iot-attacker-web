import { ip, ip3 } from '@/utils/ip';
import axios from '@/utils/axios';

export async function uploadFile(payload: { file: string | Blob; filename: string; public: any }) {
  const form = new FormData();
  form.append('file', payload?.file);
  form.append('filename', payload?.filename);
  form.append('public', payload?.public);
  return axios.post(`${ip3}/file/data/single`, form);
}

export async function uploadFileCsv(payload: { formData: FormData }) {
  const formData = payload?.formData;
  console.log(formData);
  return axios.post(`${ip}/attack/access/backdoor/upload/`, formData);
}

export async function downloadFile(payload: { filename: string }) {
  const filename = payload?.filename;
  return axios.get(`${ip}/attack/access/backdoor/${filename}/`).then((res) => {
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', `${filename}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
}
