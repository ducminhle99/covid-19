import axiosClient from "./axiosClient";
import moment from "moment";

export const covidApi = {
    getCountries: () => {
        const url = '/countries';
        return axiosClient.get(url);
    },
    getReportByCountry: (params) => {
        const url = `/dayone/country/${params}?from=2021-01-01T00:00:00&to=${moment().utc(0).format()}`;
        return axiosClient.get(url);
    }
}