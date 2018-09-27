import React from 'react';
import {withStyles} from '@material-ui/core';


const style={
    root:{
        margin:200
    }
}

const showJobs=(props,value)=>
{
    const classes= props;
 //   debugger;
return(
    <div className={classes.root}>
        <p>{props.jobtype}</p>
        <p>{props.joblocation}</p>
        <p>{props.jobsalary}</p>
        <p>{props.jobIndustry}</p>
    </div>
)
}

export default withStyles(style)(showJobs);