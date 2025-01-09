import { useContext } from "react";
import CallPage from "./pages/CallPage";
import useFetchCalls from "./utils/fetchers/useFetchCalls";
import { ParamsContext }  from "./context/ParamsContext.tsx";
import Filters from "./components/Filters.tsx";
import DateFilter from "./components/DateFilter.tsx";
import TypeCallFilter from "./components/TypeCallFilter.tsx";
import Spinner from "./components/Spinner.tsx";

const App: React.FC = () => {

  const dataParamsContext = useContext(ParamsContext);

  const {
    dataCalls,
    loading,
  } = useFetchCalls(dataParamsContext?.paramsRequest);

  return (
    <div className="app bg-primary-ligthGray">
      {loading ? (
        <Spinner/>
      ) : (
        <div className="call-page-container">
          <Filters>
            <TypeCallFilter/>
            <DateFilter/>
          </Filters>
          <CallPage
            dataCalls={dataCalls?.results}
          />
        </div>
      )}
    </div>
  )
}

export default App;
