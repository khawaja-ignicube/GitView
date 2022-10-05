import { useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Home from './functionality/Home';
import Logout from './functionality/Logout';
import CommitComponent from './CommitComponent';
import TokenCookie from './functionality/TokenCookie';
import { useCommitGetQuery } from '../services/GitViewAPI';

function Commit() {

    const { state } = useLocation();
    const { id } = state;

    const commitData = useCommitGetQuery(id)
    const [dataAvailable, setDataAvailable] = useState('');

    const navigate = useNavigate();

    const showData = () => {
        setDataAvailable('');
        if (TokenCookie('Status') !== 'true') {
            console.log('You are not login');
            navigate('/login');
        }
        if (commitData.data?.length === 0) {
            setDataAvailable('No Commit Available..!!');
        }
    };

    useEffect(() => {
        if (commitData.isSuccess) {
            showData();
        }
    }, [commitData.isSuccess]);


    if (commitData.isLoading) {
        return <div className="spinning" />;
    }

    return (
        <div className='App'>
            <div className="Auth-form-container">
                <div className="Auth-form ">
                    <div className="Auth-form-content">
                        <Logout />
                        <h1 className="Auth-form-title">Commit Page</h1>
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
                                commitData.data?.map((value, i) => (
                                    <CommitComponent
                                        key={value.id}
                                        commitID={value.id}
                                        repositoryID={value.commit_repository_id}
                                        commitKey={value.commit_id}
                                        commitName={value.committer_name}
                                        commitEmail={value.committer_email}
                                        commitDate={value.commit_date}
                                        commitMessage={value.commit_message}
                                        commitTotalComment={value.commit_total_comment}
                                        commitUrl={value.commit_url}
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

export default Commit;
