import { useContext, useEffect, useRef, useState } from "react";
import GradeStatus from "../components/ui/GradeStatus";
import NumberCall from "../components/ui/NumberCall";
import PersonAvatar from "../components/ui/PersonAvatar";
import Sorting from "../components/ui/Sorting";
import StatusCall from "../components/ui/StatusCall";
import { ICallsData } from "../types/calls.interface";
import { filteredDataCalls, formatTime, formatTimeToDuration } from "../utils/utils";
import { ParamsContext } from "../context/ParamsContext";

interface ICallPageProps {
    dataCalls: ICallsData[] | undefined;
}

const CallPage: React.FC<ICallPageProps> = (props) => {

    const {
        dataCalls,
    } = props;

    const [dataForRender, setDataForRender] = useState<ICallsData[]>();
    const dataParamsContext = useContext(ParamsContext);
   
    useEffect(() => {
        let isMounted = true;
        if (dataCalls && dataCalls.length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isMounted && setDataForRender(dataCalls);
        }
        return () => {
            isMounted = false;
        }
    }, [dataCalls])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg border-gray-200">
                <thead>
                    <tr className="w-full h-16 border-b border-gray-200 text-sm font-normal text-[#5E7793] opacity-85">
                        <td className="w-14 py-2 px-4 text-left">Тип</td>
                        <td className="w-20 py-2 px-4 text-left">
                            <Sorting
                                text='Время'
                            />
                        </td>
                        <td className="w-32 py-2 px-4 text-left">Сотрудник</td>
                        <td className="w-80 py-2 px-4 text-left">Звонок</td>
                        <td className="w-52 py-2 px-4 text-left">Источник</td>
                        <td className="w-96 py-2 px-4 text-left">Оценка</td>
                        <td className="w-24 py-2 px-4 text-right">
                            <Sorting
                                text='Длительность'
                            />
                        </td>
                    </tr>
                </thead>
                <tbody>
                {dataForRender && dataForRender.length > 0 ? (
                    <>
                    {filteredDataCalls(dataForRender, dataParamsContext?.selectedOption).map(item => (
                        <tr key={item.id} className="hover:bg-[#d4dff3]/50 hover:cursor-pointer h-16">
                            <td className="w-14 py-2 px-4 border-b border-gray-200">
                                <StatusCall
                                    status={item.in_out}
                                />
                            </td>
                            <td className="w-20 py-2 px-4 border-b border-gray-200 text-[#122945] font-light text-base">
                                {formatTime(item.date)}
                            </td>
                            <td className="w-32 py-2 px-4 border-b border-gray-200">
                                <PersonAvatar 
                                    person_avatar={item.person_avatar}
                                />
                            </td>
                            <td className="w-80 py-2 px-4 border-b border-gray-200 text-[#122945] font-light text-base">
                                <NumberCall
                                    dataForNumber={item}
                                />
                            </td>
                            <td className="w-52 max-w-16 py-2 px-4 border-b border-gray-200 text-[#5E7793] font-light text-base truncate">
                                {item.source}
                            </td>
                            <td className="w-96 py-2 px-4 border-b border-gray-200">
                               <GradeStatus/> 
                            </td>
                            <td className="w-24 py-2 px-4 border-b border-gray-200 text-[#122945] font-light text-base text-right">
                                {formatTimeToDuration(item.time)}
                            </td>
                        </tr>
                    ))}
                    </>
                ) : (
                    <p>Данные не найдены!</p>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default CallPage;
