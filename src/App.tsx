import { useContext } from "react";
import CallPage from "./pages/CallPage";
import useFetchCalls from "./utils/fetchers/useFetchCalls";
import { ParamsContext }  from "./context/ParamsContext.tsx";

const App: React.FC = () => {

  const dataParamsContext = useContext(ParamsContext);

  console.log(dataParamsContext?.paramsRequest)

  const {
    dataCalls,
    loading,
  } = useFetchCalls(dataParamsContext?.paramsRequest);
  
  console.log(loading)

  if (loading) {
    return <div>Загрузка</div>
  }

  return (
    <div className="app bg-primary-ligthGray">
      <CallPage
        dataCalls={dataCalls?.results}
      />
    </div>
  )
}

export default App;
