import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, Icon, Container, Row, Col, Toast } from 'emerald-ui';
import { actions as commentsActions } from '../../store/comments';
import { useDispatch } from 'react-redux';

const Comment = (props) => {
    const [newComment, setNewComment] = useState('');
    const [commentName, setCommentName] = useState('');
    const [commentEmail, setCommentEmail] = useState('');
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: commentName,
            email: commentEmail,
            body: newComment,
            postId: props.postId
        }
        dispatch(commentsActions.addComment(data));
        setNewComment("");
        setCommentName("");
        setCommentEmail("");
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 4000);
    };
    return (
        <form onSubmit={handleSubmit} className="mt-5">
            <Container className="mt-2">
                <Row>
                    <Col>
                        <TextField
                            type="text"
                            onChange={(e) => { setCommentName(e.target.value) }}
                            value={commentName}
                            ariaLabel="new Comment Name"
                            label="Name"
                            required={true}
                        />
                    </Col>
                    <Col>
                        <TextField
                            type="email"
                            onChange={(e) => { setCommentEmail(e.target.value) }}
                            value={commentEmail}
                            ariaLabel="new Comment Email"
                            label="Email"
                            validate='validate'
                            required
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TextField
                            textarea
                            onChange={(e) => { setNewComment(e.target.value) }}
                            value={newComment}
                            ariaLabel="new Comment"
                            label="Comment"
                            required
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="submit">
                            <Icon name="send" />
                            <span>Submit</span>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Toast
                message="The comment have been saved"
                actionText="Undo"
                position="right"
                visible={showToast}
            />
        </form>
    )
}

Comment.propTypes = {
    postId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).required,
};


export default Comment;