
const createCommentForm = (data) => {
    const CommentForm = createElement('form', 'comment-form', postContainer, '');
    CommentForm.action = '/comment';
    CommentForm.method = 'POST';
    const CommentFormContainer = createElement('div', 'comment-textarea-container', CommentForm, '');
    const CommentTextarea = createElement('textarea', 'comment-textarea', CommentFormContainer, 'Hey... say something!');
    CommentTextarea.name = 'comments';
    const { post_id } = data;
    const postId = createElement('input', 'post_id', CommentFormContainer, '');
    postId.type = 'hidden';
    postId.value = post_id;
    postId.name = 'postId';
    const CommentSubmitButton = createElement('button', 'comment-submit-button', CommentForm, 'submit');
}
