
fetch('/posts')
    .then(
        result => result.json())
    .then(
        data => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].username === cookie) {
                    createPost(data[i]);
                    createDeleteButton(data[i]);
                }

            }
        }

    )