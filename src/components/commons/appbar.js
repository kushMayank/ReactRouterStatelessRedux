import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import Tooltip from 'material-ui/Tooltip';


const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

//  SimpleAppBar(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Toolbar>
//           <Typography variant="title" color="inherit">
//             Photos
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// const Appbar = ()=>{
//     return(
//         <div>
//             <AppBar position='static' color='default'>
//             <Toolbar>
//                 <Typography variant="title" color="inherit">
//                 Profile
//                 </Typography>
//             </Toolbar>
//             </AppBar>
//         </div>
//     )
// }

// const Appbar = (props) => (

//   <div>
//     <AppBar position="static" color="default">
//       <Toolbar>
//         <Typography variant="title" color="inherit">
//           {this.props.title}
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   </div>
// );

const Appbar = props => {
  const {classes}= props
  
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton>
            <MenuIcon>
              <Menu>
                <MenuItem>
                DashBoard
                </MenuItem>
                <MenuItem>
                Profile
                </MenuItem>
                <MenuItem>
                Home
                </MenuItem>
                <MenuItem>
                jobs
                </MenuItem>
              </Menu>
            </MenuIcon>
          </IconButton>
          <Typography variant="title" color="inherit">
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};


// class AppBar extends React.PureComponent{
//   constructor(props){
//     super(props)

//     this.state={
//       ancherEl:'null'
//     }
//   }

//   render(){
//     return(
//       <div>
//       <AppBar position="static" color="default">
//         <Toolbar>
//           <Tooltip>
//           <IconButton>
//             <MenuIcon>
              
//             </MenuIcon>
//           </IconButton>

//           </Tooltip>

//           <Menu>
//                 <MenuItem>
//                 DashBoard
//                 </MenuItem>
//                 <MenuItem>
//                 Profile
//                 </MenuItem>
//                 <MenuItem>
//                 Home
//                 </MenuItem>
//                 <MenuItem>
//                 jobs
//                 </MenuItem>
//               </Menu>


//           <Typography variant="title" color="inherit">
//             {props.title}
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </div>
//     )
//   }

// }


// SimpleAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(Appbar);
