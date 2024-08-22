import { Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '@redux/store';

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
