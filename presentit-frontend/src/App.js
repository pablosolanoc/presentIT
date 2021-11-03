import logo from './logo.svg';
import './App.css';

import {Route} from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage.page';


function App() {

  useEffect(async () => {
    


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
