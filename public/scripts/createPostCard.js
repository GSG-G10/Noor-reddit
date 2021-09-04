
const body = document.querySelector('body');
const containerPosts = document.querySelector('.container-posts');



const createElement = (tag, className, parent, text) => {
    const ele = document.createElement(tag);
    parent.appendChild(ele);
    ele.classList.add(className);
    if (tag === "img") {
        ele.src = text;
    } else {
        ele.textContent = text;
    }
    return ele;
};

const postContainer = createElement('div', 'postt-container', containerPosts, '');

const createPost = (data) => {
    const SmallContainer = createElement('div', 'small-container', postContainer, '');
    const { username, title, content, image } = data;
    createElement('p', 'username', SmallContainer, `Posted by ${username}`);
    createElement('h5', 'title', SmallContainer, title);
    createElement('p', 'content', SmallContainer, content);
    if (image) {
        createElement('img', 'image', SmallContainer, image);
    }
}

const createDeleteButton = (data) => {
    const deleteCommentButton = createElement('div', 'butttons-container', postContainer, '')
    const { post_id } = data;
    const postId = createElement('input', 'post_id', postContainer, '');
    postId.type = 'hidden';
    postId.value = post_id;
    postId.name = 'postId';
    const deleteButton = createElement('button', 'delete-button', deleteCommentButton, 'Delete');
    const CommentButton = createElement('button', 'comment-button', deleteCommentButton, 'Add comment');
    deleteButton.onclick = () => {
        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ postId: postId.value })
        })
    }
}









