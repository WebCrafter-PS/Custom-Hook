import useOnlineStatus from "../utility/useOnlineStatus";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navigation from "./components/navigate";
import Body from "./components/body";
import Country from "./components/country";
import Starred from "./components/Starred";
import { lazy, Suspense, useState } from "react";
import { Provider } from "react-redux";
import myStore from "./store/myStore";

function App() {
  const onlineStatus = useOnlineStatus();
  const LazyComponent = lazy(() => import("./components/customHook"));

  const [stateLift, setStateLift] = useState("State in Parent");

  return (
    <div>
      <BrowserRouter>
        <Provider store={myStore}>
          <Navigation lift={setStateLift} />

          <div className="status">{onlineStatus ? "✅ Online" : "Offline"}</div>

          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/country" element={<Country />}></Route>
              <Route path="/stared" element={<Starred />}></Route>
              <Route
                path="/hook"
                element={
                  <Suspense fallback={<h1>...loading</h1>}>
                    <LazyComponent stateLift={stateLift} />
                  </Suspense>
                }
              ></Route>
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
      {/* Use () while using map inside JSX no {} */}
    </div>
  );
}
export default App;
