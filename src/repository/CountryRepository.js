import {Country} from '../model/Country';
import {useEffect, useState} from "react";

let countries = [];

function toCountryList(data){
    for (const d in data) {
      const countryJson = data[d];
      const country = new Country(
          countryJson.id,
          countryJson.name,
          countryJson.nativeName,
          countryJson.phoneCode,
          countryJson.continent,
          countryJson.capital,
          countryJson.currency,
          countryJson.languages,
          countryJson.flag,
      );
      countries.push(country);
    }
  }

function CountryRepository() {
    const [restData, setRestData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/countries')
            .then((response) => response.json())
            .then((data) => {
                setRestData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    toCountryList(restData);   
    return countries;
} 

export default CountryRepository;