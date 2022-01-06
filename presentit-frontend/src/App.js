import logo from './logo.svg';
import './App.css';

import {Route, Redirect, Switch} from 'react-router-dom';
import { useEffect } from 'react';
import SignInPage from './pages/SignInPage/SignInPage.page';
import LandingPage from './pages/LandingPage/LandingPage.page';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage.page';
import api from './services/api';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

function App({setCurrentUser, currentUser}) {

  const handleUser = (response) => {
    
    if(response.status === 200){
      //There is no need to add access token or refresh token to the
      // use reducer because those  are in the cookies, just user info in the reducer
      setCurrentUser(response.data);
    }else{
      //if there is no user as the response was anything other than 200
      setCurrentUser(null);
    }
  }

  useEffect(() => {
    
    async function fetchUserData(){
      try{
        // console.log(`${process.env.REACT_APP_BACK_END_ROUTE}/login/info`);
        const response = await api.get(`/login/info`);
        handleUser(response);
      }catch(error){
        //Just in case, this call should not return an error code, but for any un anticipated
        // change or problem this try-catch would handle it
        setCurrentUser(null);
      }
      
    }
    fetchUserData();
    // setCurrentUser(null);
  }, [])

  if(currentUser){
    
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
              <SignInPage/>
          </Route>
          <Route exact path="/privacy">
            <PrivacyPolicyPage></PrivacyPolicyPage>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }else{
    
    return(
      <div className="App">
        <Switch>
          <Route exact path="/signin">
              <SignInPage/>
              {/* <SignInPage/> */}
          </Route>
          <Route exact path="/">
              <LandingPage/>
              {/* <SignInPage/> */}
          </Route>
          <Route exact path="/privacy">
            <PrivacyPolicyPage></PrivacyPolicyPage>
          </Route>
          <Redirect to="/signin" />
        </Switch>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
