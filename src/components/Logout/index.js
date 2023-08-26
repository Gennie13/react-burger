import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../redux/actions/signupActions";

class Logout extends React.Component {
    //render hiigdsenii daraa ajillah funstion(dispatch hiine)
    componentDidMount = () => {
        this.props.logout();
    };
    render() {
        return <Redirect to="/"/>;
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    };
};
export default connect(null, mapDispatchToProps)(Logout);