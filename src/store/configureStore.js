import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer as commentsReducers } from './comments';
import { rootReducer as postsReducers } from './posts';

const postsItems = [];
const commentsItems = [];

const initialState = {
    posts: { postsItems },
    comments: { commentsItems }
};
const reducer = combineReducers({
    postsList: postsReducers,
    commentsList: commentsReducers
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;