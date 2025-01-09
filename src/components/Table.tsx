import { ReactNode } from 'react';

const Table: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    return (
        <div className="py-4 pl-8 bg-white rounded-lg">
            <table className="min-w-full bg-white rounded-lg border-gray-200">
                {children}
            </table>
        </div>
    )
}
export default Table;