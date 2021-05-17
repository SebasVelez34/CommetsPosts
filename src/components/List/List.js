import React from 'react';
import PropTypes from 'prop-types';
import { Panel, CardGrid } from 'emerald-ui';

import Post from '../Post';

const List = ({ posts }) => (
    <Panel >
        <Panel.Body>
            <CardGrid>
                {
                    posts.map((post, index) => (
                        <Post {...post} key={index} />
                    ))
                }
            </CardGrid>
        </Panel.Body>
    </Panel>
);

List.propTypes = {
    posts: PropTypes.array.isRequired
};

List.defaultProps = {
    posts: [],
};

export default List;