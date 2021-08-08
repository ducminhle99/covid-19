import React from 'react';
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import CountUp from "react-countup";

HighlightCard.propTypes = {};
const useStyles = makeStyles({
    wrapper: props => {
        console.log({props});
        if (props.type === 'confirmed') return {borderLeft: '10px solid red'};
        if (props.type === 'recovered') return {borderLeft: '10px solid green'};
        else return {borderLeft: '10px solid black'};
    },
    title: {fontSize: 18, marginBottom: 5},
    count: {fontWeight: 'bold', fontSize: 18},
});

function HighlightCard(props) {
    const {title, count, type} = props;
    const classes = useStyles({type});
    return (
        <Card className={classes.wrapper}>
            <CardContent>
                <Typography variant='body2' component='p' className={classes.title}>
                    {title}
                </Typography>
                <Typography variant='body2' component='span' className={classes.count}>
                    <CountUp end={count} separator=' ' duration={1}/>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HighlightCard;