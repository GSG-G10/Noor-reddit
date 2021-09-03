fetch('/posts')
    .then(
        result => result.json())
    .then(
        data => {
            for (let i = 0; i < data.length; i++) {
                createPost(data[i]);
            }
        }

    )
