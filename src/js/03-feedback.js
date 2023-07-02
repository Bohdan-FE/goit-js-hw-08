import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const data = {
    email: '',
    message: '',
}
if (localStorage.getItem('feedback-form-state')) {
    data.email = JSON.parse(
        localStorage.getItem('feedback-form-state')
    ).email;
    data.message = JSON.parse(
        localStorage.getItem('feedback-form-state')
    ).message;
};
form.addEventListener('input', throttle(inputHandler, 500));
form.addEventListener('submit', submitHandler);
if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
  document.querySelector('input').value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  document.querySelector('textarea').value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
};
function inputHandler(e) {
  if (e.target.getAttribute('name') === 'email') {
      data.email = e.target.value;
  } else if (e.target.getAttribute('name') === 'message') {
      data.message = e.target.value;
  }
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
};
function submitHandler(e) { 
    e.preventDefault();
    console.log(data);  
    if (document.querySelector('input').value) {
        document.querySelector('input').value = '';
    } else if (document.querySelector('textarea').value) {
        document.querySelector('textarea').value = '';
    }
    if (document.querySelector('input').value || document.querySelector('textarea').value) {
        localStorage.removeItem('feedback-form-state')
        document.querySelector('input').value = '';
        document.querySelector('textarea').value = '';  
    }
       
}
