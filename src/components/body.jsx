import useGetdata from "../../utility/useGetdata";
import { Outlet, useLocation } from "react-router";
import { StarContext } from "../../utility/context";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "../store/StarSlice";

export default function Body() {
  const countryName = useGetdata();
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  //if route is child route then only display outlet
  const location = useLocation();
  const isChildRoute = location.pathname !== "/";

  const handleCountry = (countryName) => {
    setCountry(countryName);
    dispatch(addCountry(countryName));
  };

  return (
    <div>
      {isChildRoute ? (
        <StarContext value={{ star: country }}>
          <Outlet />
        </StarContext>
      ) : (
        <div className="container">
          <h1>Country</h1>
          {countryName.map((ele, index) => (
            <div
              className="box"
              key={index}
              onClick={() => handleCountry(ele)}
              style={{ cursor: "pointer" }}
            >
              {ele}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
