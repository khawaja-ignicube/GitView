import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const back = () => {
        navigate('/repository');
    };

    return (
        <div className="logout">
            <button type="button" className="btn btn-light hom" onClick={back}>Home </button>
        </div>
    );
}

export default Home;
