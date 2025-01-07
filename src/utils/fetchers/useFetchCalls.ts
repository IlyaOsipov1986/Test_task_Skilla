import { useEffect, useState } from "react";
import { getСalls } from "../../api.js";
import { ICallsResponse, ICallsParams } from "../../types/calls.interface.js";

const useFetchCalls = (params: ICallsParams) => {
    const [dataCalls, setDataCalls] = useState<ICallsResponse>();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          await getСalls(params).then((res) => setDataCalls(res));
        } catch (error) {
          console.log(error)
        }
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    return {
      dataCalls,
      loading,
    };
  };
  
  export default useFetchCalls;