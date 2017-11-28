'use strict';

const products = document.querySelector('.products');
const productList = document.querySelectorAll('.product')
const product = document.querySelector('.product');
const card = document.querySelector('.card');
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
  let currentTarget = e.currentTarget;
  let target = e.target;
  console.log(currentTarget);
  let productOrderLink = currentTarget.firstElementChild.lastElementChild

  while (target != product) {
    if (target.classList.contains('card')) {
      highlight(target, 'selected');
      changeText(productOrderLink, currentText);
      return;
    } else if (target.tagName === 'A') {
      highlight(target.parentElement.parentElement.firstElementChild, 'selected');
      changeText(productOrderLink, currentText);
      return;
    }
    target = target.parentNode;
  }
});

productList.forEach(function(product) {
   product.addEventListener('mouseenter', e => {
      let target = e.currentTarget;
      let card = target.firstElementChild;
      let description = card.firstElementChild;
           
      if (card.classList.contains('selected')) {
        description.textContent = texts.description;
        description.classList.add('hover');
      }
    
     });
  product.addEventListener('mouseleave', e => {
    let target = e.currentTarget;
    let card = target.firstElementChild;
    let description = card.firstElementChild;
   
    if ( description.textContent === texts.description ) {
      description.textContent = 'Сказочное заморское яство';
      description.classList.remove('hover');
    }

});   

})


function changeText(element, currentText) {
  if (element.innerHTML === currentText) {
    if (element.dataset.order === 'liver') {
      element.innerHTML = texts.liver;
    }
    else if (element.dataset.order === 'fish') {
      element.innerHTML = texts.fish;
    }
    else if (element.dataset.order === 'chicken') {
      element.innerHTML = texts.chicken;
    }
  } else {
    element.innerHTML = currentText;
  }
}

function highlight(element, className) {
  element.classList.toggle(className);
}
