import React from 'react';
import Profile from './Profile';
import {setUserProfile, getProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { WithAuthRedirect } from '../WithAuthRedirect/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {  
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
         this.props.getProfile(userId)
         this.props.getStatus(userId)
    }
    
    render () {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.id
})

export default compose (connect (mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
withRouter,
WithAuthRedirect)
(ProfileContainer)