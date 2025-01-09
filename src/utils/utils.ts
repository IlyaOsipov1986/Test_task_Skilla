import moment from "moment";
import { ICallsData } from "../types/calls.interface";

export const addGradeStatusProp = (dataCalls: ICallsData[]) => {
    if(!dataCalls) {
        return [];
    }
    const values = [0, 1, 2];
    const resultsGradeStatusProp = dataCalls?.map((el) => {
        const randomIndex = Math.floor(Math.random() * values.length);
    return {...el, gradeIndex: values[randomIndex]}
    })
    return resultsGradeStatusProp;
}

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

export const formatDate = (value: string | Date) => {
    return moment(value).format("YYYY-MM-DD");
};

export type getSelectedDatesType = (
    value: string,
) => void;

export const getSelectedPeriodDates: getSelectedDatesType = (value: string): void => {
    switch(value) {
        case '3day': {
            const objDate = getThreeDaysStartAndEnd();
            return objDate;
        }
        case 'week': {
            const objDate = getWeekStartAndEnd();
            return objDate;
        }; 
        case 'month': {
            const objDate = getMonthStartAndEnd();
            return objDate;
        }
        case 'year': {
            const objDate = getYearStartAndEnd();
            return objDate;
        }   
        default: return;    
    }
}

export type getDatesType = () => void;

// Получение начальной и конечной даты относительно трех дней
const getThreeDaysStartAndEnd:getDatesType = () => {
    const today = new Date();
    const startDate = new Date(today);
    const endDate = new Date(today);

    // Устанавливаем начальную дату (текущий день)
    startDate.setHours(0, 0, 0, 0); 

    // Устанавливаем конечную дату (через 2 дня)
    endDate.setDate(today.getDate() + 2); 
    endDate.setHours(23, 59, 59, 999);

    const objDates = {
        start_date: formatDate(startDate),
        end_date: formatDate(endDate)
    }
    return objDates;
}

// Получение начальной и конечной даты текущей недели
const getWeekStartAndEnd: getDatesType = () => {
    const today = new Date();
    const weekStart = new Date(today);
    const weekEnd = new Date(today);

    // Устанавливаем начальную дату (понедельник)
    weekStart.setDate(today.getDate() - today.getDay() + 1);
    weekStart.setHours(0, 0, 0, 0);

    // Устанавливаем конечную дату (воскресенье)
    weekEnd.setDate(today.getDate() - today.getDay() + 7);
    weekEnd.setHours(23, 59, 59, 999);

    const objDates = {
        start_date: formatDate(weekStart),
        end_date: formatDate(weekEnd)
    }
    return objDates;
}

// Получение начальной и конечной даты текущего месяца
const getMonthStartAndEnd: getDatesType = () => {
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0); 
    monthEnd.setHours(23, 59, 59, 999); 

    const objDates = {
        start_date: formatDate(monthStart),
        end_date: formatDate(monthEnd)
    }
    return objDates;
}

// Получение начальной и конечной даты текущего года
const getYearStartAndEnd: getDatesType = () => {
    const today = new Date();
    const yearStart = new Date(today.getFullYear(), 0, 1);
    const yearEnd = new Date(today.getFullYear(), 11, 31); 
    yearEnd.setHours(23, 59, 59, 999); 

    const objDates = {
        start_date: formatDate(yearStart),
        end_date: formatDate(yearEnd)
    }
    return objDates;
}

