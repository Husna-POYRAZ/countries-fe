import jsonData from "../data/countries.json";
import {Country} from "../model/Country";
import {Component} from "react";

class Countries extends Component{
    render() {
        let countries = [];
        for (const jsonDataKey in jsonData) {
            const countryJson = jsonData[jsonDataKey];
            const country = new Country(
                jsonDataKey,
                countryJson.name,
                countryJson.native,
                countryJson.phone,
                countryJson.continent,
                countryJson.capital,
                countryJson.currency,
                countryJson.languages
            );
            countries.push(country);
        }
        return countries;
    }
}

export default Countries;