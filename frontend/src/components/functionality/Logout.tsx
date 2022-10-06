import React from 'react';
import { useNavigate } from 'react-router-dom';

export const DeleteCookie = () => {
    document.cookie = 'Token=; Max-Age=0';
    document.cookie = 'Username=; Max-Age=0';
    document.cookie = 'Status=; Max-Age=0';
};

function Logout() {
    const navigate = useNavigate();

    const logout = () => {
        DeleteCookie();
        navigate('/login');
    };

    return (
            <div className="logout">
                <button type="button" className="btn btn-light lgt" onClick={logout}>Logout</button>
            </div>
    );
}

export default Logout;
