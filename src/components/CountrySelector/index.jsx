import React from 'react';
import Select from "react-select";

const countryList = (countries) => {
    return countries.map((country) => {
        return {
            value: country.Slug,
            label: country.Country,
        }
    });
}

function CountrySeletor(props) {
    const {countries, value, onChangeCountry} = props
    // console.log("country value", {value})

    const options = countryList(countries);
    const selectedCountry = options.find((country) =>
        country.value === value)
    // console.log({selectedCountry})
    return (
        <Select
            options={options}
            value={selectedCountry}
            onChange={onChangeCountry}
        />
    );
}

export default CountrySeletor;