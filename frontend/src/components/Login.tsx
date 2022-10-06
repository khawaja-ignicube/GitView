import { useCookies } from 'react-cookie';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, ChangeEvent } from 'react';
import { useTokenGetMutation } from '../services/GitViewAPI';

function Login() {
    const [getTokenPost, tokenPost] = useTokenGetMutation();

    const [username, setUsername] = useState('khawajaali444');
    const [password, setPassword] = useState('ali12345');
    const [errorMessage, setErrorMessage] = useState('');
    const [cookies, setCookie] = useCookies(['Token', 'Username', 'Status']);

    const navigate = useNavigate();

    const addData = () => {
        setErrorMessage('');
        const loginData = { username, password };
        if (username !== '' && password !== '') {
            getTokenPost(loginData);
        } else {
            setErrorMessage('Please enter the data first');
        }
    }

    const SuccessLogin = () => {
        setCookie('Token', tokenPost.data?.access, { path: '/' });
        setCookie('Username', username, { path: '/' });
        setCookie('Status', 'true', { path: '/' });
        navigate('/repository');
    };

    useEffect(() => {
        if (tokenPost.isSuccess) {
            SuccessLogin();
        }
        if (tokenPost.isError) {
            setErrorMessage('Please enter the correct username/password');
        }
    }, [tokenPost]);
    
    return (
        <div className='App'>
            <div className="Auth-form-container">
                <div className="Auth-form ">
                    <div className="Auth-form-content">
                        <h1 className="Auth-form-title text-center">Login</h1>

                        <br/>
                        <div className="form-group mt-3 text-center">
                            <h5>Username</h5>
                            <input
                                id='login-username'
                                type='username'
                                placeholder='Enter username'
                                value={username}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => {setUsername(event.target.value)}}
                            />
                        </div>

                        <div className="form-group mt-3 text-center">
                            <h5>Password</h5>
                            <input
                                id='login-password'
                                type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(event: ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) }}
                            />
                        </div>

                        <br />
                        {errorMessage && (
                            <div className="error text-center">
                                {' '}
                                {errorMessage}
                                {' '}
                            </div>
                        )}

                        <h2 className='Auth-form-title text-center'>
                            {' '}
                            <NavLink className="sgn-btn" to="/">Signup </NavLink>
                            {' '}
                        </h2>

                        <br/>
                        <div className="d-grid gap-2 mt-3">
                            <button type="button" className="btn btn-primary" onClick={addData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
