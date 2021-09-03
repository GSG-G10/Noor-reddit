
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


const createPost = (data) => {
    const postContainer = createElement('div', 'postt-container', containerPosts, '');
    const { post_id, username, title, content, image } = data;
    createElement('p', 'username', postContainer, `Posted by ${username}`);
    createElement('h5', 'title', postContainer, title);
    createElement('p', 'content', postContainer, content);
    if (image) {
        createElement('img', 'image', postContainer, image);
    }
    const postId = createElement('input', 'post_id', postContainer, '');
    postId.type = 'hidden';
    postId.value = post_id;
    postId.name = 'postId';
    const deleteButton = createElement('button', 'delete-button', postContainer, 'Delete');
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









