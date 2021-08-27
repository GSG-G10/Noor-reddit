const signUp = document.querySelector('#Sign-up');
const signForm = document.querySelector('.sign-up-form');
const closeSignForm = document.querySelector('.sign-up-close-button');

const popForm = () => {
    signForm.style.display = "block";
};

const closeForm = () => {
    signForm.style.display = "none";
};


signUp.addEventListener('click', popForm);
closeSignForm.addEventListener('click', closeForm);



