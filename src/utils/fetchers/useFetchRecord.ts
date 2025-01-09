import { useEffect, useState } from "react";
import { getRecord } from "../../api.js";

const useFetchRecord = (id: string) => {

    const [dataRecord, setDataRecord] = useState<string>();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          await getRecord(id).then((res) => setDataRecord(URL.createObjectURL(res)));
        } catch (error) {
          console.log(error)
        }
        setLoading(false);
      };

      if (id) {
        fetchData();
      }
      
    }, [id]);
  
    return {
      dataRecord,
      loading,
    };
  };
  
  export default useFetchRecord;