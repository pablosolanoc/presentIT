import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage.page';
import { auth } from './utils/firebase.utils';
import {createUser} from './utils/createUser.utils'

function App() {

  useEffect(async () => {
    // let userRef2 = await createUser({hola:1});
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        console.log('Si hay un usuario');
        const userRef = await createUser(userAuth);
        // console.log(userRef);
      }else{
        console.log('NO hay un usuario');
      }
    })
    
    return () => {
      unsubscribeFromAuth();
    }

  }, [])


  return (
    <div className="App">
      <Route  path="/home">
        <HomePage/>
      </Route>
    </div>
  );
}

export default App;
