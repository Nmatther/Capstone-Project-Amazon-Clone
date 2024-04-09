import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { doSignInWithEmailAndPassword } from '../../auth';
import { useAuth } from '../../authContext';
import './Login.css'

const Login = () => {
    const { userLoggedIn } = useAuth()
    const  navigate  = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
    
        try {
            if (!isSigningIn) {
                setIsSigningIn(true);
                await doSignInWithEmailAndPassword(email, password);
                // doSendEmailVerification()
            }
        } catch (error) {
            console.error("An error occurred during sign-in:", error.message);
             setErrorMessage(error.message); 
        } finally {
            setIsSigningIn(false); // Reset the signing in state
        }
    };

  return (
    <>
    {userLoggedIn && (<Navigate to={'/'} replace={true} />)}


    <div className='login'>
        <Link to = '/'>
        <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className="login__container">
            <h1>Sign-in</h1>
            <form onSubmit={onSubmit}>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                {errorMessage && ( <span>{errorMessage}</span>)}

                <button type='submit' className='login__signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={() => {navigate('/register')}} className='login__registerButton'>Create your Amazon Account</button>

        </div>
    </div>
    </>
  )
  
}

export default Login