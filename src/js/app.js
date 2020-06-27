/* eslint-disable linebreak-style */
const count = document.getElementById('count');
const fields = document.querySelectorAll('.field');

for (const field of fields) {
  field.addEventListener('click', () => {
    if (field.querySelector('img').classList.contains('appearance')) {
      count.textContent = Number(count.textContent) + 1;
      field.querySelector('img').classList.remove('appearance');
    }
  });
}
