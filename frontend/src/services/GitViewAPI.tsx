import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TokenCookie from '../components/functionality/TokenCookie';

export const gitviewApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_URL,
    }),

    endpoints: (builder) => ({
        // Get token
        tokenGet: builder.mutation({
            query: (data) => ({
                url: '/token/',
                method: 'POST',
                body: data,
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
            }),
        }),

        // Post Signup
        signupPost: builder.mutation({
            query: (data) => ({
                url: '/createUser/',
                method: 'POST',
                body: data,
                headers: { 'Content-type': 'application/json; charset=UTF-8' },
            }),
        }),

        // Get Repository
        repositoryGet: builder.query({
            query: () => ({
                url: '/getRepository/',
                method: 'GET',
                headers: { Authorization: `Bearer ${TokenCookie('Token')}` },
            }),
        }),


        // Get Branch
        BranchGet: builder.query({
            query: (id) => ({
                url: `/getBranch/${id}`,
                method: 'GET',
                headers: { Authorization: `Bearer ${TokenCookie('Token')}` },
            }),
        }),

        // Get Commit
        CommitGet: builder.query({
            query: (id) => ({
                url: `/getCommit/${id}`,
                method: 'GET',
                headers: { Authorization: `Bearer ${TokenCookie('Token')}` },
            }),
        }),

        // Get Comment
        CommentGet: builder.query({
            query: (id) => ({
                url: `/getComment/${id}`,
                method: 'GET',
                headers: { Authorization: `Bearer ${TokenCookie('Token')}` },
            }),
        }),
    }),
});

export const { useTokenGetMutation ,useRepositoryGetQuery , useBranchGetQuery, useCommitGetQuery, useCommentGetQuery, useSignupPostMutation} = gitviewApi;