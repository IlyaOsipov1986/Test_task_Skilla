import GradeStatus from "../components/ui/GradeStatus";
import NumberCall from "../components/ui/NumberCall";
import PersonAvatar from "../components/ui/PersonAvatar";
import Sorting from "../components/ui/Sorting";
import StatusCall from "../components/ui/StatusCall";
import { ICallsData } from "../types/calls.interface";
import { formatTime, formatTimeToDuration } from "../utils/utils";

interface ICallPageProps {
    dataCalls: ICallsData[] | undefined;
}

const CallPage: React.FC<ICallPageProps> = (props) => {

    const {
        dataCalls,
    } = props;

    console.log(dataCalls)

    return (
        <div className="call-page-conteiner overflow-x-auto">
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
                {dataCalls?.map(item => (
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
                </tbody>
            </table>
        </div>
    )
}

export default CallPage;