import moment from "moment";
import { ICallsData } from "../types/calls.interface";

export const formatTime = (value: string) => {
    if (!value) return "";
    return moment
      .utc(value)
      .format("HH:mm");
};

export const formatTimeToDuration = (seconds: number) => {
    if (!seconds) return '';
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    // Форматируем время с добавлением ведущих нулей
    const formattedTime = [
      String(minutes).padStart(2, '0'),
      String(secs).padStart(2, '0'),
    ].join(':');
  
    return formattedTime;
};

export const filteredDataCalls = (dataForRender: ICallsData[], params: string | number | undefined) => {
    if (params === 'all') {
        return dataForRender;
    } else {
        return dataForRender.filter((el => el.in_out === params))
    }
}

export const formatDate = (value: string) => {
    return moment(value).format("YYYY-MM-DD");
};
