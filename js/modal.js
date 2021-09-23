const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal');
// const modalClose = modal.querySelector('.modal__close');
const overlay = modal.querySelector('.overlay');
modalBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});
// modalClose.addEventListener('click', () => {
//   modal.classList.add('hidden');
// });
// overlay.addEventListener('click', () => {
//   modal.classList.add('hidden');
// });
modal.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden');

  }
})