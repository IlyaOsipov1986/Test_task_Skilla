import { ICallsData } from "../types/calls.interface";

interface ICallPageProps {
    dataCalls: ICallsData[] | undefined;
}

const CallPage: React.FC<ICallPageProps> = (props) => {

    const {
        dataCalls
    } = props;

    console.log(dataCalls)

    return (
        <div className="call-page-conteiner overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg border-gray-200">
                <thead>
                    <tr className="w-full h-16 border-b border-gray-200 text-sm font-normal text-[#5E7793] opacity-85">
                        <td className="py-2 px-4 text-left">Тип</td>
                        <td className="py-2 px-4 text-left">Время<img/></td>
                        <td className="py-2 px-4 text-left">Сотрудник</td>
                        <td className="py-2 px-4 text-left">Звонок</td>
                        <td className="py-2 px-4 text-left">Источник</td>
                        <td className="py-2 px-4 text-left">Оценка</td>
                        <td className="py-2 px-4 text-left">Длительность</td>
                    </tr>
                </thead>
                <tbody>
                {dataCalls?.map(item => (
                    <tr key={item.id} className="hover:bg-gray-100 h-16">
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600 font-light text-base">{item.id}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default CallPage;