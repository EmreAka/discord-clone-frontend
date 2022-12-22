import { createAction, props } from '@ngrx/store';

export const open = createAction('[CreateChannel Component] Open', props<{category: any}>());
export const close = createAction('[CreateChannel Component] Close');