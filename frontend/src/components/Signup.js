import { supabase } from '../services/OAuthServer';
import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignupPostMutation } from '../services/GitViewAPI'

function Signup() {
    const [user, setUser] = useState(null);
    const [getRegisterUser, registerUser] = useSignupPostMutation();

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [token, setToken] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const signin = () => {
    setErrorMessage('');
    if (password !== '' && passwordConfirm !== '' && token !== '' ) {
      const data = {
        authorization_user_id: user.id,
        username:user.user_metadata.user_name,
        password,
        password2: passwordConfirm,
        email: user.user_metadata.email,
        first_name: user.user_metadata.full_name,
        authorization_access_token:token
      };
      getRegisterUser(data);
    } else {
      setErrorMessage('Please enter the required data first');
    }
  };

    const checkUser = async () => {
        const user = supabase.auth.user();
        setUser(user);
    }
    
    const signinGithub = async () => {
        await supabase.auth.signIn({
            provider: 'github'
        });
    }
    
    const serverBreak = async () => {
        await supabase.auth.signOut();
        setUser(null);
    }
    
    useEffect(() => {
        window.addEventListener('hashchange', function () {
            checkUser();
        });
    }, [])

    if (registerUser.isLoading) {
        return <div className="spinning" />;
    }
    if (registerUser.isError) {
        return <h1> Some thing went wrong </h1>;
    }
    if (registerUser.isSuccess) {
        serverBreak();
        navigate('/login')
    }


    if (user) {
        return (
            <div className='App'>
            <div className="Auth-form-container">
                <div className="Auth-form ">
                    <div className="Auth-form-content">
                        <h1 className="Auth-form-title text-center">Signup</h1>
                        <br/><br/>
                        
                        <div className="form-group mt-3 text-center">
                            <h5>User ID </h5>
                            <input
                                type="text"
                                value={user.id}
                                readOnly
                            />
                        </div>

                        <div className="form-group mt-3 text-center">
                            <h5>User Name </h5>
                            <input
                                type="text"
                                value={user.user_metadata.user_name}
                                readOnly
                            />
                        </div>

                        <div className="form-group mt-3 text-center">
                            <h5>Email </h5>
                            <input
                                type="text"
                                value={user.user_metadata.email}
                                readOnly
                            />
                        </div>

                        <div className="form-group mt-3 text-center">
                        <h5>Password</h5>
                        <input
                            id="signup-password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(event) => {setPassword(event.target.value)}}
                        />
                        </div>

                        <div className="form-group mt-3 text-center">
                        <h5>Confirm Password</h5>
                        <input
                            id="signup-confirm-password"
                            type="password"
                            placeholder="Enter password again"
                            value={passwordConfirm}
                            onChange={(event) => {setPasswordConfirm(event.target.value)}}
                        />
                        </div>

                        <div className="form-group mt-3 text-center">
                            <h5>Full Name </h5>
                            <input
                                type="text"
                                value={user.user_metadata.full_name}
                                readOnly
                            />
                        </div>

                        <div className="form-group mt-3 text-center">
                        <h5>Access Token</h5>
                        <input
                            id="signup-token"
                            type="text"
                            placeholder="Enter access token"
                            value={token}
                            onChange={(event) => {setToken(event.target.value)}}
                        />
                        </div>
                        
                        {errorMessage && (
                            <div className="error">
                            {' '}
                            {errorMessage}
                            {' '}
                            </div>
                        )}
                        
                        <br/><br/>
                        <div className="d-grid gap-2 mt-3">
                            <button type="button" className="btn btn-primary" onClick={signin} >Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    return (
        <div className='App'>
            <div className="Auth-form-container">
                <div className="Auth-form ">
                    <div className="Auth-form-content">
                        
                        <br/><br/><br/><br/><br/><br/>
                        <h1 className="Auth-form-title text-center">Signup</h1>
                        
                        <br/><br/><br/><br/><br/><br/>
                        <div className="d-grid gap-2 mt-3">
                            <button type="button" className="btn btn-primary" onClick={signinGithub}>Sign Up with Git Hub</button>
                        </div>

                        <br/><br/><br/><br/><br/><br/>
                        <h2 className='Auth-form-title text-center'>
                            {' '}
                            <NavLink className="sgn-btn" to="/login">Login </NavLink>
                            {' '}
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
