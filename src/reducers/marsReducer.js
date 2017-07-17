import {
    MARS_REQUEST,
    MARS_SUCCESS,
    MARS_FAILURE
} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function marsReducer(state = initialState.mars, action) {
    console.log('action', action);
    switch (action.type) {
        case MARS_REQUEST:
            return {
              ...state,
              isLoading: true,
              error: null
            };

        case MARS_SUCCESS:
            return {
              ... state,
              isLoading: false,
              error: null,
              data: action.data
            };

        case MARS_FAILURE:
            return {
              ...state,
              isLoading: false,
              error: action.data
            };

        default:
            return state;
    }
}
