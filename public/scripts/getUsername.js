const usernameContainer = document.querySelector('#username');


function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const cookie = getCookie('username');
usernameContainer.textContent = cookie;

const profileLink = document.querySelector('#profile-link');
profileLink.href = `/user/${cookie}`;




