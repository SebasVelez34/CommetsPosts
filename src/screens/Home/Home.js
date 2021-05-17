import React, { useEffect } from 'react';
import Container from 'emerald-ui/lib/Container';
import { Row, Col, SkeletonLoader } from 'emerald-ui/';
import '../../styles/sass/main.css';
import Navbar from '../../components/Navbar';
import List from '../../components/List';
import { actions as commentsActions } from '../../store/comments';
import { actions as postsActions } from '../../store/posts';
import { mergeComments } from '../../utils/helper';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
    const { postsListReducer } = useSelector(state => state.postsList);
    const { commentsListReducer } = useSelector(state => state.commentsList);
    const { posts, loading: postsLoading, error: postsError } = postsListReducer;
    const { comments, loading: commentsLoading, error: commentsError } = commentsListReducer;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(commentsActions.fetchComments());
        dispatch(postsActions.fetchPosts());
    }, []);

    const mergePosts = mergeComments({ posts, comments });
    return (
        <div style={{ backgroundImage: "url('./images/background.svg')", backgroundRepeat: "no-repeat" }}>
            <Navbar />
            {postsError ? <div> {postsError} </div> :
                <SkeletonLoader loading={postsLoading}>
                    <Container className="mt-2">
                        <Row>
                            <Col>
                                <List posts={mergePosts} />
                            </Col>
                        </Row>
                    </Container>
                </SkeletonLoader>
            }
        </div>
    )
}

export default Home;