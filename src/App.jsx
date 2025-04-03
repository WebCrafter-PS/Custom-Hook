import useOnlineStatus from "../utility/useOnlineStatus";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./components/navigate";
import Body from "./components/body";
import Country from "./components/country";
import Starred from "./components/Starred";

function App() {
  const onlineStatus = useOnlineStatus();

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <h1>Country</h1>
        <div className="status">{onlineStatus ? "✅ Online" : "Offline"}</div>

        <Routes>
          <Route path="/" element={<Body />}>
          
            <Route path="/country" element={<Country />}></Route>
            <Route path="/stared" element={<Starred />}></Route>
            {/* <Route path="" element={}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* Use () while using map inside JSX no {} */}
    </div>
  );
}
export default App;
