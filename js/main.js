const products = document.querySelector('.products');
const card = document.querySelector('.card');
const cardDescription = document.querySelector('.card__description');
const productOrder = document.querySelector('.product-order');
const buyButton = document.querySelector('.product-order__link');
const texts = {
  description: 'Котэ не одобряет?',
  liver: 'Печень утки разварная с артишоками.',
  fish: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  chicken: 'Филе из цыплят с трюфелями в бульоне.',
  liverDisabled: 'Печалька, с фуа-гра закончился',
  fishDisabled: 'Печалька, с рыбой закончился',
  chickenDisabled: 'Печалька, с курой закончился'
};

products.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('card') || target.classList.contains('product-order__link')) {
    card.classList.toggle('selected');
    productOrder.innerHTML = texts.liver;
  }
  // while(target != this)
  // card.classList.toggle('selected');
  // productOrder.innerHTML = texts.liver;
});
