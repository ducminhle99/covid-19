import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import LineChart from "../Charts/LineChart";
import Map from "../Charts/highMap";
import {getMapDataByCountryId} from "../../api/countryMapApi";

Summary.propTypes = {};

function Summary(props) {
    const {report, countryId} = props;
    const [mapData, setMapData] = useState({});
    useEffect(() => {
        getMapDataByCountryId(countryId)
            .then((res) => {
                setMapData(res);
            })
            .catch((err) => console.warn({err}));
    }, [countryId])

    return (
        <div style={{height: '600px', marginTop: 10}}>
            <Grid container spacing={3}>
                <Grid item sm={8} xs={12}>
                    <LineChart data={report}/>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Map mapData={mapData}/>
                </Grid>
            </Grid>

        </div>
    );
}

export default Summary;