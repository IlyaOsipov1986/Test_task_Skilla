import { useEffect, useState } from "react";
import { getСalls } from "../../api.js";
import { ICallsResponse, ICallsParams } from "../../types/calls.interface.js";

const useFetchCalls = (params: ICallsParams | undefined) => {
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
     
    }, [params?.date_start, params?.date_end, params?.sort_by]);
  
    return {
      dataCalls,
      loading,
    };
  };
  
  export default useFetchCalls;