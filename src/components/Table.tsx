import { ReactNode } from 'react';

const Table: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    return (
        <table className="min-w-full bg-white rounded-lg border-gray-200">
            {children}
        </table>
    )
}
export default Table;