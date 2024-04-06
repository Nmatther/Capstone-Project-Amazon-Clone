import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { auth } from '../../firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        //put fiebase login  here
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it succesfully created a new user with email and password
            console.log(auth);
        }).catch(error => alert(error.message))
        
    }

  return (
    <div className='login'>
        <Link to = '/'>
        <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' className='login__signInButton' onClick={signIn}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button className='login__registerButton' onClick={register}>Create your Amazon Account.</button>
        </div>
    </div>
  )
}

export default Login