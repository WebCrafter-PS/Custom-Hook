//api call
//return country name

import { useState, useEffect } from "react";

const useGetdata = () => {
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

  return country;
};
export default useGetdata;
