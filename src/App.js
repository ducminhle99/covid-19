import './App.css';
import {Container, Typography} from "@material-ui/core";
import {useEffect, useMemo, useState} from "react";
import {covidApi} from "./api/covidApi";
import moment from "moment";
import "moment/locale/vi"
import CountrySeletor from "./components/CountrySelector";
import Highlight from "./components/HighLight";
import Summary from "./components/Summary";

moment.locale('vi')

function App() {
    const [countries, setCountries] = useState([]);
    const [report, setReport] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState('vietnam');

    useEffect(() => {
        const fetchReport = async () => {
            const res = await covidApi.getCountries()
            setCountries(res);
        }
        fetchReport();
    }, [])

    useEffect(() => {
        const fetchReportByCountry = async () => {
            const res = await covidApi.getReportByCountry(selectedCountryId)
            console.log('repost of country:', res)
            setReport(res);
        }
        fetchReportByCountry();
    }, [selectedCountryId])

    const summary = useMemo(() => {
        if (report && report.length) {
            const latestData = report[report.length - 2];
            console.log({latestData})
            return [
                {
                    title: 'Số ca nhiễm',
                    count: latestData.Confirmed,
                    type: 'confirmed',
                },
                {
                    title: 'hien tai ',
                    count: latestData.Active,
                    type: 'recovered',
                },
                {
                    title: 'Tử vong',
                    count: latestData.Deaths,
                    type: 'death',
                },
            ];
        }
        return [];
    }, [report]);

    const handleChange = (country) => {
        console.log("seleted in app", country)
        setSelectedCountryId(country.value)
    }
    console.log('load app');
    return (
        <Container>
            <Typography variant={'h2'} component={"h2"}>
                Covid-19
            </Typography>
            <Typography>
                {moment().format('LLL')}
            </Typography>
            <CountrySeletor
                value={selectedCountryId}
                countries={countries}
                onChangeCountry={handleChange}

            />
            <Highlight summary={summary}/>
            <Summary countryId={selectedCountryId} report={report}/>
        </Container>
    );
}

export default App;
