import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Home from './functionality/Home';
import Logout from './functionality/Logout';
import CommentComponent from './CommentComponent';
import TokenCookie from './functionality/TokenCookie';
import { useCommentGetQuery } from '../services/GitViewAPI';

function Comment() {
    const { state } = useLocation();
    const { id } = state;

    const commentData = useCommentGetQuery(id)
    const [dataAvailable, setDataAvailable] = useState('');

    const navigate = useNavigate();

    const showData = () => {
        setDataAvailable('');
        if (TokenCookie('Status') !== 'true') {
            console.log('You are not login');
            navigate('/login');
        }
        if (commentData.data?.length === 0) {
            setDataAvailable('No Comment Available..!!');
        }
    };

    useEffect(() => {
        if (commentData.isSuccess) {
            showData();
        }
    }, [commentData.isSuccess]);


    if (commentData.isLoading) {
        return <div className="spinning" />;
    }

    return (
        <div className='App'>
            <div className="Auth-form-container">
                <div className="Auth-form ">
                    <div className="Auth-form-content">
                        <Logout />
                        <h1 className="Auth-form-title">Comment Page</h1>
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
                                commentData.data?.map((value, i) => (
                                    <CommentComponent
                                        key={value.id}
                                        commentID={value.id}
                                        commitID={value.comment_commit_id}
                                        commentKey={value.comment_id}
                                        commentDate={value.comment_date}
                                        commentMessage={value.comment_body}
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

export default Comment;
