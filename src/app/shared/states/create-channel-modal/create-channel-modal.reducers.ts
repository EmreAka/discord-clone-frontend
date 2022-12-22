import { createReducer, on } from '@ngrx/store';
import { open, close } from './create-channel-modal.actions';

export interface State {
  category: any
  state: boolean
}

export const initialState:State = {
  category: null,
  state: false
};

export const createChannelModalReducer = createReducer(
  initialState,
  on(open, (state, {category}) => ({category: category, state: true})),
  on(close, (state) => ({category: null, state: false}))
);