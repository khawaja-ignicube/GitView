import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Logout from './functionality/Logout';
import RepositoryComponent from './RepositoryComponent';
import TokenCookie from './functionality/TokenCookie';
import { useRepositoryGetQuery } from '../services/GitViewAPI';

function Repository() {

    const repositoryData = useRepositoryGetQuery(undefined)
    const [dataAvailable, setDataAvailable] = useState('');

    const navigate = useNavigate();

    const showData = () => {
        setDataAvailable('');
        if (TokenCookie('Status') !== 'true') {
            console.log('You are not login');
            navigate('/login');
        }
        if (repositoryData.data?.length === 0) {
            setDataAvailable('No Repository Available..!!');
        }
    };

    useEffect(() => {
        if (repositoryData.isSuccess) {
            showData();
        }
    }, [repositoryData.isSuccess]);


    if (repositoryData.isLoading) {
        return <div className="spinning" />;
    }

    return (
        <div className='App'>
            
            <div className="Auth-form-container">
                <div className="Auth-form ">
                    <div className="Auth-form-content">
                        <Logout />
                        <h1 className="Auth-form-title">Repository Page</h1>

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
                                repositoryData.data?.map((value, i) => (
                                    <RepositoryComponent
                                        key={value.id}
                                        repositoryID={value.id}
                                        repositoryKey={value.repository_id}
                                        repositoryName={value.repository_name}
                                        repositoryType={value.repository_type}
                                        repositoryDescription={value.repository_description}
                                        repositoryCreated={value.repository_created}
                                        repositoryDefault_branch={value.repository_default_branch}
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

export default Repository;
