import useGetdata from "../utility/useGetdata";
import useOnlineStatus from "../utility/useOnlineStatus";
import "./App.css";

function App() {
  const countryName = useGetdata();
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <h1>Country</h1>
      <div className="status">{onlineStatus ? "✅ Online" : "Offline"}</div>
      {/* Use () while using map inside JSX no {} */}
      <div className="container">
        {countryName.map((ele, index) => (
          <div className="box" key={index}>
            {ele}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
