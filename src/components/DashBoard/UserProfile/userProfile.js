import React from 'react';
import {withStyles} from '@material-ui/core'

const style={
  root:{
    margin:100
  }
}

const userProfile=(props)=>{
  const {classes} = props
  //debugger;
  return(
    <div className={classes.root}>
      <p> name:</p> <div>{props.name}</div>
      <p> address:</p><div>{props.address}</div>
      <p> cell:</p><div>{props.cell}</div>

    </div>
)}

export default withStyles(style)(userProfile);
