'use strict';

const products = document.querySelector('.products');
const product = document.querySelector('.product');
const card = document.querySelector('.card');
const cardDescription = document.querySelector('.card__description');
const productOrder = document.querySelector('.product-order');
const buyButton = document.querySelector('.product-order__link');
const currentDescription = document.querySelector;
const currentText = productOrder.innerHTML;
const texts = {
  description: 'Котэ не одобряет?',
  liver: 'Печень утки разварная с артишоками.',
  fish: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  chicken: 'Филе из цыплят с трюфелями в бульоне.',
  liverDisabled: 'Печалька, с фуа-гра закончился',
  fishDisabled: 'Печалька, с рыбой закончился',
  chickenDisabled: 'Печалька, с курой закончился'
};

products.addEventListener('click', e => {
  e.preventDefault();
  let target = e.target;

  while (target != product) {
    if (target.classList.contains('card')) {
      highlight(target, 'selected');
      changeText();

      return;
    } else if (target.classList.contains('product-order__link')) {
      highlight(target.parentElement.parentElement.firstElementChild, 'selected');
      changeText();
      return;
    }
    target = target.parentNode;
  }
});

function changeText(element, currentText) {
  if (element.innerHTML === currentText) {
    if (element.dataset.order === 'liver') {
      element.innerHTML = texts.liver;
    }
    if (element.dataset.order === 'liver') {
      element.innerHTML = texts.liver;
    }
  } else {
    element.innerHTML = currentText;
  }
}

function highlight(element, className) {
  element.classList.toggle(className);
}
