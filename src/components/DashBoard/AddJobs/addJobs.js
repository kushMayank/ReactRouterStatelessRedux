import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import {withStyles} from '@material-ui/core';
import pink from '@material-ui/core/colors/pink';

const style={
    root:{
        marginLeft:1000,
        backgroundColor:pink
    }
}

// const addJobs =(props)=>(


//     <div className={props.root}>
        
//         <p>Job type</p><TextField onChange={e=>props.actions.handleChange(e.target.value,'jobtype')}></TextField>
//         <p>Job Industry</p><TextField onChange={e=>props.actions.handleChange(e.target.value,'jobIndustry')}></TextField>
//         <p>Job Location</p><TextField onChange={e=>props.actions.handleChange(e.target.value,'joblocation')}></TextField>
//         <p>Job Salary</p><TextField onChange={e=>props.actions.handleChange(e.target.value,'jobsalary')}></TextField>
//         <Button onClick= {props.actions.handleSubmit} >Post</Button>
//     </div>
// )


const addJobs=(props)=>{
    const {classes}= props;
    debugger;
    return(
        <div className={classes.root}>
        
                 <p>Job type</p><TextField onChange={e=>props.actions.handleChange(e.target.value,'jobtype')}></TextField>
                 <p>Job Industry</p><TextField onChange={e=>props.actions.handleChange(e.target.value,'jobIndustry')}></TextField>
                 <p>Job Location</p><TextField onChange={e=>props.actions.handleChange(e.target.value,'joblocation')}></TextField>
                 <p>Job Salary</p><TextField onChange={e=>props.actions.handleChange(e.target.value,'jobsalary')}></TextField>
                 <Button onClick= {props.actions.handleSubmit(true,'jobpost')} >Poster</Button>
             </div>
    )
}

export default withStyles(style)(addJobs);