import { hydra_form_data } from './../../services/Access/hydra';
import { useState } from "react";
import {
  Hydra,
  hydra,
} from "@/services/Access/hydra";

export default () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Hydra>({
    textarray: [],
  });

  const hydraModel = async (options: string) => {
    try {
      setLoading(true);
      const response = await hydra(options);
      console.log(response?.data);
      setData({
        textarray: response?.data,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData({
        textarray: [],
      });
    }
  }

  const hydraForm = async (formData: FormData) => {
    try {
      setLoading(true);
      const response = await hydra_form_data(formData);
      console.log(response?.data);
      setData({
        textarray: response?.data,
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData({
        textarray: [],
      });
    }
  }

  return {
    loading,
    setLoading,
    data,
    setData,

    hydraModel,
    hydraForm
  };
};
