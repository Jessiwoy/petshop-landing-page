const form = document.querySelector('#contactForm');
const modal = document.querySelector('#successModal');
const closeModal = document.querySelector('#closeModal');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  let valid = true;

  [name, email, message].forEach((field) => {
    const error = field.nextElementSibling;

    if (!field.value.trim()) {
      error.textContent = 'Campo obrigatório';
      valid = false;
    } else {
      error.textContent = '';
    }
  });

  if (valid) {
    modal.classList.add('show');
    form.reset();
  }
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});