import { ReactNode } from 'react';

const Filters: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div className='filters'>
            {children}
        </div>
    )
}
export default Filters;