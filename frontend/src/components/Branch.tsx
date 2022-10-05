import {  useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Home from './functionality/Home';
import Logout from './functionality/Logout';
import BranchComponent from './BranchComponent'
import TokenCookie from './functionality/TokenCookie';
import { useBranchGetQuery } from '../services/GitViewAPI';

function Branch() {

    const { state } = useLocation();
    const { id } = state;

    const branchData = useBranchGetQuery(id)
    const [dataAvailable, setDataAvailable] = useState('');

    const navigate = useNavigate();

    const showData = () => {
        setDataAvailable('');
        if (TokenCookie('Status') !== 'true') {
            console.log('You are not login');
            navigate('/login');
        }
        if (branchData.data?.length === 0) {
            setDataAvailable('No Branch Available..!!');
        }
    };

    useEffect(() => {
        if (branchData.isSuccess) {
            showData();
        }
    }, [branchData.isSuccess]);

    if (branchData.isLoading) {
        return <div className="spinning" />;
    }

    return (
        <div className='App'>
            <div className="Auth-form-container">
                <div className="Auth-form ">
                    <div className="Auth-form-content">
                        <Logout />
                        <h1 className="Auth-form-title">Branch Page</h1>
                        <Home />
                        {dataAvailable && (
                            <div className="error mt-2">
                                {' '}
                                {dataAvailable}
                                {' '}
                            </div>
                        )}

                        <div className="work mt-3">
                            <br />
                            {
                                branchData.data?.map((value, i) => (
                                    <BranchComponent
                                        key={value.id}
                                        branchID={value.id}
                                        repositoryID={value.branch_repository_id}
                                        branchName={value.branch_name}
                                        branchCommit={value.branch_commit}
                                        branchProtected={value.branch_protected}
                                    />
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Branch;
