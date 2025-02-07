import axios from "axios";
import qs from "qs";
import { config } from "./config";
import { ICallsParams } from "./types/calls.interface";

export const apiService = axios.create({
    baseURL: config.api_url,
    headers: {
      "Content-type": "application/json",
      "Authorization" : `Bearer ${config.testToken}`
    },
});

//Запрос для получения списка звонков  
export const getСalls = async (params: ICallsParams | undefined) => {
  const queryString = qs.stringify(
    {
      date_start: params?.date_start,
      date_end: params?.date_end,
      in_out: params?.in_out,
      sort_by: params?.sort_by,
      limit: params?.limit
    },
    {
      arrayFormat: "repeat",
    },
  );
  return await apiService
    .post(`mango/getList?${queryString}`)
    .then((resp) => resp.data);
};

//Запрос для получения записи 
export const getRecord = async (id: string) => {
  return await apiService
    .post(`mango/getRecord?record=${id}`, {
      headers: {
        "Content-type": 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        "Content-Transfer-Encoding": "binary",  
      },
    },
      {responseType: 'blob'}
    )
    .then((resp) => resp.data);
};