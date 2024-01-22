const LOCALSTORAGEKEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

feedbackForm.addEventListener('input', e => {
  if (e.target.name === 'email') {
    formData.email = e.target.value;
  }

  if (e.target.name === 'message') {
    formData.message = e.target.value;
  }

  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCALSTORAGEKEY);
  e.target.reset();
});

function restoreFormData() {
  let restoredData = localStorage.getItem(LOCALSTORAGEKEY);
  if (restoredData !== null) {
    formData = JSON.parse(restoredData);
    feedbackForm.elements.email.value = formData.email;
    feedbackForm.elements.message.value = formData.message;
  }
}

restoreFormData();
