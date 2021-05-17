import { createActionTypes } from '../../../utils/utils';

export default {
  ...createActionTypes('comments', 'FETCH_COMMENTS'),
  ...createActionTypes('comments', 'ADD_COMMENTS'),
};
