import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizeUserType } from '../../components/functionality/TypeScript'

// AuthorizeUser Model data
const initialStateValue: AuthorizeUserType = {
    AuthorizeUserObject: {
        AuthorizeUserID: '',
        AuthorizeUserUsername: '',
        AuthorizeUserPublicRepository: '',
        AuthorizeUserOwnPrivateRepository: '',
        AuthorizeUserTotalPrivateRepository: '',
    },
};

export const authorizeUserHomeSlice = createSlice({
    name: 'authorizeUser',
    initialState: initialStateValue,

    reducers: {
        setAuthorizeUser: (state, action: PayloadAction<any | undefined>) => {
            state.AuthorizeUserObject = action.payload;
        },
    },
});

export const { setAuthorizeUser } = authorizeUserHomeSlice.actions;

export default authorizeUserHomeSlice.reducer;
