import React from 'react';
import {Grid} from "@material-ui/core";
import LineChart from "../Charts/LineChart";

Summary.propTypes = {};

function Summary(props) {
    const {report} = props;
    // const [mapData, setMapData] = useState({});
    // useEffect(() => {
    //     if(countryId) {
    //         const fetchMapData = async () =>{
    //             const res = await get
    //         }
    //     }
    // })

    return (
        <div style={{height: '600px', marginTop: 10}}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report}/>
            </Grid>
        </div>
    );
}

export default Summary;