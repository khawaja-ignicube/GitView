export interface AuthorizeUserType {
    AuthorizeUserObject: {
        AuthorizeUserID: string | undefined,
        AuthorizeUserUsername: string | undefined,
        AuthorizeUserPublicRepository: string | undefined,
        AuthorizeUserOwnPrivateRepository: string | undefined,
        AuthorizeUserTotalPrivateRepository: string | undefined,
    }
}

export type RepositoryComponentPropsType = {
    repositoryID: string;
    repositoryKey: string;
    repositoryName: string;
    repositoryType: string;
    repositoryDescription: string;
    repositoryCreated: string;
    repositoryDefault_branch: string;
}

export type BranchComponentPropsType = {
    branchID: string;
    repositoryID: string;
    branchName: string;
    branchCommit: string;
    branchProtected: string;
}

export type CommitComponentPropsType = {
    commitID: string;
    repositoryID: string;
    commitKey: string;
    commitName: string;
    commitEmail: string;
    commitDate: string;
    commitMessage: string;
    commitTotalComment: string;
    commitUrl: string;
}

export type CommentComponentPropsType = {
    commentID: string;
    commitID: string;
    commentKey: string;
    commentDate: string;
    commentMessage: string;
}