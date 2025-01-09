import { useEffect, useState } from "react";

const useSelectNumberCall = (in_out: number, from_number: string | undefined, to_number: string | undefined) => {

  const [number, setNumber] = useState('');

  useEffect(() => {
    let isMounted = true;

    if (in_out === 1) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isMounted && setNumber(to_number ? to_number : 'Номер не найден');
    } else if(in_out === 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isMounted && setNumber(from_number ? from_number : 'Номер не найден');
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      isMounted && setNumber('Номер не найден');
    }

    return () => {
      isMounted = false;
    };
  }, [in_out, from_number, to_number]);

  return { number };
}

export default useSelectNumberCall;