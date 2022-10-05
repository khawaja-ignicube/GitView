import React from 'react';
import { BranchComponentPropsType } from './functionality/TypeScript'

function BranchComponent({
    branchID, repositoryID, branchName, branchCommit, branchProtected
}: BranchComponentPropsType) {

    return (
        <div className="workData">

            <div className="form-group mt-3">
                <h5>Branch ID </h5>
                <input
                    type="text"
                    value={branchID}
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
                <h5>Branch Name </h5>
                <input
                    type="text"
                    value={branchName}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Branch Commit </h5>
                <input
                    type="text"
                    value={branchCommit}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Branch Protected </h5>
                <input
                    type="text"
                    value={branchProtected}
                    readOnly
                />
            </div>
        </div>
    );
}

export default BranchComponent;
