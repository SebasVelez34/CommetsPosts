import types from './types';
import { commentsApi } from '../../../api';

const fetchComments = () => async (dispatch) => {
    try {
        dispatch({ type: types.FETCH_COMMENTS_REQUEST });
        const { data } = await commentsApi.fetchComments();
        dispatch({ type: types.FETCH_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.FETCH_COMMENTS_FAILURE, payload: error.message });
    }
}

const addComment = (data) => async (dispatch, getState) => {
    try {
        dispatch({ type: types.ADD_COMMENTS_REQUEST });
        const { commentsList, postsList } = getState();
        const { commentsListReducer: { comments } } = commentsList;
        let { postsListReducer: { posts } } = postsList;
        const { postId } = data;
        let post = posts.find(post => post.id === postId);
        const maxPostId = comments.reduce((p, c) => p.id > c.id ? p : c);
        data.id = maxPostId.id + 1;
        comments.push(data);
        post.comments.push(data);
        const payload = {
            comments,
            posts
        }
        dispatch({ type: types.ADD_COMMENTS_SUCCESS, payload });
    } catch (error) {
        dispatch({ type: types.ADD_COMMENTS_FAILURE, payload: error.message });
    }
}

export {
    fetchComments,
    addComment
}