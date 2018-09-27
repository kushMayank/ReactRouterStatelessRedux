import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
// import { bindActionCreators } from "react-redux";
import {bindActionCreators} from 'redux'
import * as Actions from "./action";

class Container extends React.PureComponent  {
  render() {
    
    return (
      <div>
        {/* <Profile /> */}
        <Profile {...this.props} value="aahgsh" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  address: state.address,
  cell: state.cell
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
