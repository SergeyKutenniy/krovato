const refs = {
  openTextBtn: document.querySelector('[data-open-text]'),
  text: document.querySelector('.section-descr__text'),
  btn: document.querySelector('.section-descr__text-btn'),
};

refs.openTextBtn.addEventListener('click', toggleText);

function toggleText() {
  refs.text.classList.toggle('is-shadow');
  refs.btn.classList.toggle('btn-rotate');
}
