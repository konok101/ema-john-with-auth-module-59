import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

import './SignUp.css'
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate =useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/shop');

    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two password didn,t same")
            return;
        }

        if (password.length < 6) {
            setError("at last 6 character")
        }

        createUserWithEmailAndPassword(email, password)

    }



    return (
        <div>
            <div className='form-container'>

                <div >
                    <h2 className="form-title"> Sign Up</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="Confirm password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>  {error}</p>
                        <input className='form-submit' type="submit" value="Login" />
                    </form>
                    <p> Already HAve an account <Link className='form-link' to='/login'> Login</Link></p>
                </div>

            </div>
        </div>
    );
};

export default SignUp;