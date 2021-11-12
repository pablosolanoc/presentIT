import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage.page';
import LandingPage from './pages/LandingPage.page';
import api from './services/api';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';


function App({setCurrentUser, currentUser}) {

  const handleUser = (response) => {
    console.log(response);
    if(response.status === 200){
      setCurrentUser(response.data);
    }else{
      console.log('No hay nada');
    }
  }

  useEffect(() => {
    console.log('hey');
    async function fetchUserData(){
      console.log(`${process.env.REACT_APP_BACK_END_ROUTE}/login/info`);
      const response = await api.get(`/login/info`);
      handleUser(response);
    }
    fetchUserData();
  }, [])

  if(currentUser){
    console.log('here');
    return (
      <div className="App">
        <Route  path="/">
            <HomePage/>
        </Route>
      </div>
    );
  }else{
    console.log('here2');
    return(
      <div className="App">
        <Route  path="/">
            {/* <LandingPage/> */}
            <HomePage/>
        </Route>
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
