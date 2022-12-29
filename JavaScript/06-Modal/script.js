'use strict'; // Using strict mode for development

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

console.log(btnOpenModal); // It prints the first element

const btnOpenModalAll = document.querySelectorAll('.show-modal');
console.log(btnOpenModalAll);

for (let i = 0; i < btnOpenModalAll.length; i++) {
  console.log(btnOpenModalAll[i].textContent);
  btnOpenModalAll[i].addEventListener('click', function () {
    console.log(`Button ${i + 1} clicked`);
    openModal();
  });
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key, typeof e.key);
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
