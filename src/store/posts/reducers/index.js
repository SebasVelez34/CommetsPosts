import types from '../actions/types';
import { combineReducers } from 'redux';

function postsListReducer(state = { posts: [] }, action) {
    switch (action.type) {
        case types.FETCH_POSTS_REQUEST:
            return { loading: true, ...state };
        case types.FETCH_POSTS_SUCCESS:
            return { loading: false, posts: action.payload };
        case types.FETCH_POSTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    postsListReducer
});