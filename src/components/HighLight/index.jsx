import React from 'react';
import {Grid} from "@material-ui/core";
import HighlightCard from "./HighlightCard";

Highlight.propTypes = {

};

function Highlight(props) {
    const {summary} = props
    console.log("summary", summary);
    return (
        <Grid container spacing={3} style={{marginTop: 10}}>
            {summary.map((data) => (
                <Grid item sm={4} xs={12} key={data.type}>
                    <HighlightCard
                    title={data.title}
                    count={data.count}
                    type={data.type}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default Highlight;