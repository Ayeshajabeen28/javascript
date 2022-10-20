// const form = document.querySelector('.signup-form');
// const feedback = document.querySelector('.feedback');
// form.addEventListener('submit', e => {


//     //validation 
//     const username = form.username.value;
//     const usernamepattern = /^[a-ZA-Z]{6,12}$/;

//     if (usernamepattern.test(username)) {

//         //feedback good info
//         feedback.textContent = 'that username is valid';

//     } else {

//         //feedback help info
//         feedback.textContent = 'user must conatin letters only & be between 6 & 12 character long';
//     }

// });

// //live feedback

// form.username.addEventListener('keyup', e => {
//     console.log(e.target.value, form.username.value);
// });  