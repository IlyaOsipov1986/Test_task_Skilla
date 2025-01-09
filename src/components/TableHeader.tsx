import Sorting from "./ui/Sorting";

const TableHeader: React.FC = () => {
    return (
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
    )

}
export default TableHeader;