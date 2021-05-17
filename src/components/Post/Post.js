import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Carousel } from 'emerald-ui';
import ActionModal from '../Modal';
import Commet from '../Comment';

const Post = (props) => {
    const [showToggleModal, setShowToggleModal] = useState(false);
    const handleActionModal = () => setShowToggleModal(!showToggleModal);
    const { title, body, id, comments } = props;
    return (
        <div key={id}>
            <Card>
                <div>
                    <h2 className="eui-card-title">{title}</h2>
                    <p> {body} </p>
                    <Button color="info" onClick={handleActionModal}>See Post</Button>
                </div>

            </Card>
            <ActionModal
                onHide={handleActionModal}
                title={title}
                show={showToggleModal}
            >
                <div>
                    <p>{body}</p>
                    <h3>Comments</h3>
                    <Carousel innerMargin={0} noFadingSides>
                        {comments.map((comment, index) => (
                            <Carousel.Slide style={{ width: '20vw' }} key={index}>
                                <div className="comments">
                                    <p><b>Name:</b> {comment.name}</p>
                                    <p><b>Email:</b> {comment.email}</p>
                                    <p><b>Comment:</b></p>
                                    <p>{comment.body}</p>
                                </div>
                            </Carousel.Slide>
                        ))}
                    </Carousel>
                    <h4>Add new comment</h4>
                    <Commet postId={id} />
                </div>

            </ActionModal>
        </div>
    )
}


Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    comments: PropTypes.array
};

Post.defaultProps = {
    comments: []
};
export default Post;