import types from '../actions/types';
import { combineReducers } from 'redux';

function commentsListReducer(state = { comments: [] }, action) {
    switch (action.type) {
        case types.FETCH_COMMENTS_REQUEST:
            return { loading: true, ...state };
        case types.FETCH_COMMENTS_SUCCESS:
            return { loading: false, comments: action.payload };
        case types.FETCH_COMMENTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function commentAddReducer(state = { comments: [] }, action) {
    switch (action.type) {
        case types.ADD_COMMENTS_REQUEST:
            return { loading: true, ...state };
        case types.ADD_COMMENTS_SUCCESS:
            return { loading: false, comments: action.payload.comments, posts: action.payload.posts };
        case types.ADD_COMMENTS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export default combineReducers({
    commentsListReducer,
    commentAddReducer
});