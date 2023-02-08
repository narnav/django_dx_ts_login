import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  loginAsync
} from './loginSlice';
import styles from './Counter.module.css';

export function Login() {
//   const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
    const [password, setpassword] = useState("")
    const [username, setuserName] = useState("")
  return (
    <div>
      <div className={styles.row}>
          User name<input onChange={(e)=>setuserName(e.target.value)}/>
          password<input onChange={(e)=>setpassword(e.target.value)}/>
          <button onClick={()=>dispatch(loginAsync({password,username}))}>Login</button>
      </div>
    </div>
  );
}
