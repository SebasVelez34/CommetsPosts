import { createActionTypes } from '../../../utils/utils';

export default {
  ...createActionTypes('posts', 'FETCH_POSTS')
};
