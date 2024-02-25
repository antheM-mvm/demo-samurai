import React from 'react';
import {Routes, Route, BrowserRouter, HashRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {connect, Provider} from "react-redux";
import './App.css';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from './components/Navbar/Navbar.jsx';
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import {withRouter} from "./hoc/withRouter";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainerWithSuspence = withSuspense(DialogsContainer);
const ProfileContainerWithSuspence = withSuspense(ProfileContainer);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs' element={<DialogsContainerWithSuspence />}/>
              <Route path='/profile/:userId?' element={<ProfileContainerWithSuspence />}/>
              <Route path='/users' element={<UsersContainer/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    initialized: state.app.initialized
  }
)

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = () => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamuraiJSApp;