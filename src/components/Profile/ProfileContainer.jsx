import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Navigate} from "react-router-dom";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowMyProfile: true
    }
  }

  componentDidMount() {
    let userIdFromPath = this.props.router.params.userId;
    let authorizedUserId = this.props.authorizedUserId;

    if (userIdFromPath) {
      this.props.getUserProfile(userIdFromPath);
      this.props.getStatus(userIdFromPath);
    } else if (this.props.isAuth) {
      this.props.getUserProfile(authorizedUserId);
      this.props.getStatus(authorizedUserId);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let userIdFromPath = this.props.router.params.userId;
    let authorizedUserId = this.props.authorizedUserId;
    let isShowMyProfile = this.state.isShowMyProfile;

    if (isShowMyProfile) {
      if (userIdFromPath === authorizedUserId) {
        this.setState({ isShowMyProfile: false })
      }
      if (!userIdFromPath && this.props.isAuth) {
        this.props.getUserProfile(authorizedUserId);
        this.props.getStatus(authorizedUserId);
        this.setState({ isShowMyProfile: false })
      }
    }
  }

  render() {
    if (!this.props.isAuth && !this.props.router.params.userId) {
      return <Navigate to={'/login'} />
    }

    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose(
  withRouter,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})
)(ProfileContainer)