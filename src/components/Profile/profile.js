import React from "react";
import { Link } from "react-router-dom";
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '../commons/appbar'
import SidebarExampleVisible from '../commons/sidebar'


const style= theme =>({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

const Profile = (props, value) => {
    debugger;
    return(
  <div>
    <SidebarExampleVisible/>
    <AppBar title="Profile" />

    <div className="name"><p>Name :</p> <span><TextField onChange={e=>props.actions.handleChange(e.target.value,"name")} /></span>
    </div>

    <div className="address"><p>Address </p> <span> <TextField onChange={e=>props.actions.handleChange(e.target.value,"address")} /></span>
      
    </div>

    <div className="cell"><p>Cell</p><span><TextField onChange={e=> props.actions.handleChange(e.target.value,"cell")}/></span>
      
    </div>

  </div>
    )};

export default withStyles(style)(Profile);
