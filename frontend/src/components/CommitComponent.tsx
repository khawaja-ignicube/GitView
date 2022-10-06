import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { useNavigate } from 'react-router-dom'; 
import { CommitComponentPropsType } from './functionality/TypeScript'

function CommitComponent({
    commitID, repositoryID, commitKey, commitName, commitEmail, commitDate, commitMessage, commitTotalComment, commitUrl
}: CommitComponentPropsType) {

    const newCommitDate = new Date(commitDate);
    const navigate = useNavigate();

    const comment = () => {
        navigate('/comment', { state: { id: commitID } })
    }

    return (
        <div className="workData">

            <div className="form-group mt-3">
                <h5>Commit ID </h5>
                <input
                    type="text"
                    value={commitID}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Repository ID </h5>
                <input
                    type="text"
                    value={repositoryID}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Commit Name </h5>
                <input
                    type="text"
                    value={commitName}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Commit Date </h5>
                <DateTimePicker
                    className="mt-1"
                    value={newCommitDate}
                />
            </div>

            <div className="form-group mt-3">
                <h5>Commit Email </h5>
                <input
                    type="text"
                    value={commitEmail}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Commit Message </h5>
                <input
                    type="text"
                    value={commitMessage}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Commit Url </h5>
                <input
                    type="text"
                    value={commitUrl}
                    readOnly
                />
            </div>

            <div className="log">
                <button type="button" className="btn btn-light com" onClick={comment}>View Comment</button>
            </div>
        </div>
    );
}

export default CommitComponent;
