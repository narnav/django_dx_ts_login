import React, { useEffect } from 'react';
import './App.css';
import { Login } from './features/login/Login';
import { useAppSelector, useAppDispatch } from './app/hooks';
import {  selectlogged,logout,selectuserName} from './features/login/loginSlice';
function App() {
    const logged = useAppSelector(selectlogged);
    const uNameeee = useAppSelector(selectuserName);
    const dispatch = useAppDispatch();
  return (
    <div className="App">
      <header className="App-header">
          <h1>Welaome {uNameeee}</h1>
        {logged?<button onClick={()=>dispatch(logout())}>logout</button>:
        <Login></Login>}
      </header>
    </div>
  );
}

export default App;
