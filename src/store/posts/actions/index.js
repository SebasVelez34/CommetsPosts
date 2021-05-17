import types from './types';
import { postsApi } from '../../../api';

const fetchPosts = () => async (dispatch) => {
    try {
        dispatch({ type: types.FETCH_POSTS_REQUEST });
        const { data } = await postsApi.fetchPosts();
        dispatch({ type: types.FETCH_POSTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: types.FETCH_POSTS_FAILURE, payload: error.message });
    }
}

export {
    fetchPosts
}