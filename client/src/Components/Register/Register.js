import React, { useState } from 'react';
import { Navigate, Link, useNavigate} from 'react-router-dom'
import { doCreateUserWithEmailAndPassword } from '../../auth';
import { useAuth } from '../../authContext';
import './Register.css'

const Register = () => {

    const navigate = useNavigate()

    const { userLoggedIn } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState('')
    const [errorMessage, setErrorMessage] = useState('')


    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        
        }
    }

  return (
    <>
    {userLoggedIn && (<Navigate to={'/'} replace={true} />)}


    <div className='login'>
        <Link to = '/'>
        <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </Link>

        <div className="login__container">
            <h1>Create a New Account</h1>
            <form onSubmit={onSubmit}>
                <h5>Email</h5>
                <input type='email' autoComplete='email' required value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input disabled={isRegistering} autoComplete='new-password' required type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <h5>Confirm Password</h5>
                <input disabled={isRegistering} autoComplete='off' required type='password' value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)}/>

                {errorMessage && ( <span>{errorMessage}</span>)}

                <button type='submit' disabled={isRegistering}className='login__signInButton'>{isRegistering ? 'Signing Up...' : 'Sign Up'}</button>

                <p> Already have an account? {' '}<Link to={'/login'}>Continue</Link></p>
            </form>

            <p>
                By creating an account you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

        </div>
    </div>
    </>
  )
  
}

export default Register 