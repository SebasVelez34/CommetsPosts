const mergeComments = ({ posts, comments }) => {
    let postWithComments = [];
    posts.forEach(post => {
        post.comments = comments ? comments.filter(comment => comment.postId === post.id) : [];
        postWithComments.push(post);
    });
    return postWithComments;
}

export {
    mergeComments
}