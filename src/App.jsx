import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState([]);
  //fetch country data using api call
  useEffect(() => {
    const fetchCountry = async () => {
      var requestOptions = {
        method: "GET",
      };
      //we get json data - so parse/breaking down it to JS obj(for codesake)
      const jsonData = await fetch(
        "https://restcountries.com/v3.1/region/asia/",
        requestOptions
      );
      const promiseObj = await jsonData.json(); //returns a promise obj

      const display = promiseObj.map((country) => country.name.common);
      setCountry(display);
    };
    fetchCountry();
  }, []);

  return (
    <div>
      <h1>Country</h1>
      {/* Use () while using map inside JSX no {} */}
      <div className="container">
        {country.map((ele, index) => (
          <div className="box" key={index}>
            {ele}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
