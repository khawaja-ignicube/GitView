import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { CommentComponentPropsType } from './functionality/TypeScript'

function CommentComponent({
    commentID, commitID, commentKey, commentDate, commentMessage
}: CommentComponentPropsType) {

    const NewCommentDate = new Date(commentDate);

    return (
        <div className="workData">
            <div className="form-group mt-3">
                <h5>Comment ID </h5>
                <input
                    type="text"
                    value={commentID}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Commit ID </h5>
                <input
                    type="text"
                    value={commitID}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Comment Key </h5>
                <input
                    type="text"
                    value={commentKey}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Comment Message </h5>
                <input
                    type="text"
                    value={commentMessage}
                    readOnly
                />
            </div>

            <div className="form-group mt-3">
                <h5>Commit Date </h5>
                <DateTimePicker
                    className="mt-1"
                    value={NewCommentDate}
                />
            </div>
        </div>
    );
}

export default CommentComponent;
