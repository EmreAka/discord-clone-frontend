import { createReducer, on } from '@ngrx/store';
import { open, close } from './create-channel-modal.actions';

export const initialState:boolean = false;

export const createChannelModalReducer = createReducer(
  initialState,
  on(open, (state) => true),
  on(close, (state) => false)
);