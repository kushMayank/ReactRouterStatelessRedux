import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from './action'
import AddJobs from './AddJobs/addJobs';
import ShowJobs from './Jobs/showJobs';
import UserProfile from './UserProfile/userProfile';
import {Link} from 'react-router-dom'

class DashBoardContainer extends React.PureComponent{
    render(){
        return(
            <div>
                <Link to ='/'>Home</Link>
                <div className='showjobs'><ShowJobs {...this.props}/></div>
                <div className='userProfile'><UserProfile {...this.props}/></div>
                <div className='addjobs'><AddJobs {...this.props} value='wddwdw'/></div>
            
            </div>
        )
    }
}

// const mapStateToProps= (state)=>(
//     {
//     jobtype: state.jobtype,
//     joblocation: state.joblocation,
//     jobsalary: state.jobsalary,
//     jobIndustry:state.jobIndustry,
//     name:state.name,
//     address:state.address,
//     cell:state.cell
//     }
// )

const mapStateToProps= (state)=>{
   // debugger;
    return({
    jobtype: state.dashboardReducer.jobtype,
    joblocation: state.dashboardReducer.joblocation,
    jobsalary: state.dashboardReducer.jobsalary,
    jobIndustry:state.dashboardReducer.jobIndustry,
    name:state.profileReducer.name,
    address:state.profileReducer.address,
    cell:state.profileReducer.cell
    }
    )
}


const mapDispatchToProps= (dispatch)=>({
    actions: bindActionCreators(Actions,dispatch)
})


export default connect(mapStateToProps,mapDispatchToProps)(DashBoardContainer);
