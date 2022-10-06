import React from 'react';
import { useNavigate } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import { RepositoryComponentPropsType } from './functionality/TypeScript'

function RepositoryComponent({
    repositoryID, repositoryKey, repositoryName, repositoryType, repositoryDescription, repositoryCreated, repositoryDefault_branch
}: RepositoryComponentPropsType) {

    const RepositoryDate = new Date(repositoryCreated);
    const navigate = useNavigate();

    const branch = () => {
        navigate('/branch', { state: { id: repositoryID } })
    }

    const commit = () => {
        navigate('/commit', { state: { id: repositoryID } })
    }

    return (
        <div className="workData">

            <div className="form-group mt-3">
                <h5>Repository ID </h5>
                <input
                    type="text"
                    value={repositoryID}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Repository Number </h5>
                <input
                    type="text"
                    value={repositoryKey}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Repository Name </h5>
                <input
                    type="text"
                    value={repositoryName}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Task Start Date and Time </h5>
                <div>
                    <DateTimePicker
                        className="mt-1"
                        value={RepositoryDate}
                    />
                </div>
            </div>

            <div className="form-group mt-3">
                <h5>Repository Private </h5>
                <input
                    type="text"
                    value={repositoryType}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Repository Default Branch </h5>
                <input
                    type="text"
                    value={repositoryDefault_branch}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Repository Description </h5>
                <input
                    type="text"
                    value={repositoryDescription}
                    readOnly
                />
            </div>

            <div className="log">
                <button type="button" className="btn btn-light lgt" onClick={branch}>View Branches</button>
                <button type="button" className="btn btn-light brc" onClick={commit}>View Commit</button>
            </div>
        </div>
    );
}

export default RepositoryComponent;
