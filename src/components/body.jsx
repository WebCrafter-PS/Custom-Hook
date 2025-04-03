import useGetdata from "../../utility/useGetdata";
import { Outlet, useLocation } from "react-router";

export default function Body() {
  const countryName = useGetdata();

  //if route is child route then only display outlet
  const location = useLocation();
  const isChildRoute = location.pathname !== "/" ;
console.log(isChildRoute)
  return (
    <div>
      {isChildRoute ? (
        <Outlet />
      ) : (
        <div className="container">
          {countryName.map((ele, index) => (
            <div className="box" key={index}>
              {ele}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
