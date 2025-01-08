import moment from "moment";

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