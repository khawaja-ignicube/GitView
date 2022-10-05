import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import authorizeUserReducer from '../app/features/authorizeUserSlice'

import { gitviewApi } from '../services/GitViewAPI';

const rootReducer = combineReducers({
    authorizeUser: authorizeUserReducer,
    [gitviewApi.reducerPath]: gitviewApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gitviewApi.middleware),
    preloadedState,
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
