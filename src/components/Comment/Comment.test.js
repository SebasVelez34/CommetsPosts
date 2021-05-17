import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import Comment from './Comment';
import '../../setupTests';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';

describe('Comment Components', () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      postId: 1
    };
    const props = Object.assign({}, defaultProps, newProps);
    const wrapper = shallow(
      <Provider store={store}>
        <Comment {...props} />
      </Provider>
    );
    return { wrapper, props };
  };

  it('renders without crashing', () => {
    const { wrapper } = makeWrapper();
    expect(wrapper.find(Comment)).to.have.lengthOf(1);
  });
});
