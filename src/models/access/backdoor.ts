import { deleteFile, get } from '@/services/Access/backdoor';
import { downloadFile, uploadFileCsv } from '@/services/uploadFile';
import { message } from 'antd';
import { useState } from 'react';

export interface IBackdoorRecord {
  id: string;
  filename: string;
}

export default () => {
  const [loading, setLoading] = useState(false);
  const [danhSach, setDanhSach] = useState<IBackdoorRecord[]>([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [edit, setEdit] = useState(false);
  const [record, setRecord] = useState<IBackdoorRecord | {}>({});
  const [visibleForm, setVisibleForm] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filterInfo, setFilterInfo] = useState<any>({});
  const [condition, setCondition] = useState<any>({});
  const [visible, setVisible] = useState<boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      console.log(page, limit, condition);
      const res = await get({
        page,
        limit,
        ...condition,
      });
      console.log(res);
      setDanhSach(res?.data);
      setTotal(res?.count);
    } catch (error) {
      setDanhSach([]);
      setTotal(0);
      // message.error(error);
    } finally {
      setLoading(false);
    }
  };

  const up = async (payload: { formData: FormData }) => {
    try {
      setLoading(true);
      const res = await uploadFileCsv(payload);
      console.log(res);
      message.success('Upload thành công');
      setVisibleForm(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // message.error(error);
    }
  };

  const download = async (payload: { filename: string }) => {
    try {
      setLoading(true);
      const res = await downloadFile(payload);
      console.log(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // message.error(error);
    }
  };

  const deleteRecord = async (payload: { filename: string }) => {
    try {
      setLoading(true);
      const res = await deleteFile(payload);
      console.log(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // message.error(error);
    }
  };

  return {
    condition,
    danhSach,
    edit,
    filterInfo,
    loading,
    limit,
    total,
    page,
    record,
    visible,
    visibleForm,
    showDrawer,

    setCondition,
    setDanhSach,
    setEdit,
    setFilterInfo,
    setLimit,
    setTotal,
    setPage,
    setRecord,
    setVisible,
    setVisibleForm,
    setShowDrawer,

    getData,
    up,
    download,
    deleteRecord,
  };
};
