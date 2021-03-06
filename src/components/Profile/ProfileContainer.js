import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "./profile-reducer";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {

        if(!this.props.isAuth) return <Redirect to= {"/Login"}/>

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})


export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);