import React from 'react';
import Profile from './Profile';
import {setUserProfile, getProfile, getStatus, updateStatus} from '../../redux/profileReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { WithAuthRedirect } from '../WithAuthRedirect/WithAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {        
         this.props.getProfile(this.props.match.params.userId)
         this.props.getStatus(this.props.match.params.userId)
    }
    
    render () {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose (connect (mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus}),
withRouter,
WithAuthRedirect)
(ProfileContainer)