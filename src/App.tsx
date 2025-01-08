import CallPage from "./pages/CallPage";
import useFetchCalls from "./utils/fetchers/useFetchCalls";

const App: React.FC = () => {

  const {
    dataCalls,
    loading,
  } = useFetchCalls({
    date_start: '2024-01-07',
    date_end: '2024-01-28'
  });
  
  console.log(loading)

  return (
    <div className="app bg-primary-ligthGray">
      <CallPage
        dataCalls={dataCalls?.results}
      />
    </div>
  )
}

export default App;
