'use strict';

const productList = document.querySelectorAll('.product')
const cardList = document.querySelectorAll('.card');
const productOrderLinkList = document.querySelectorAll('.product-order__link');

const productOrder = document.querySelector('.product-order');
const currentText = productOrder.textContent;
const texts = {
  description: 'Котэ не одобряет?',
  liver: 'Печень утки разварная с артишоками.',
  fish: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  chicken: 'Филе из цыплят с трюфелями в бульоне.',
  liverDisabled: 'Печалька, с фуа-гра закончился',
  fishDisabled: 'Печалька, с рыбой закончился',
  chickenDisabled: 'Печалька, с курой закончился'
};

cardList.forEach(card => {
  card.addEventListener('click', e => {
    const card = e.currentTarget;
    const productOrder = card.nextElementSibling;
    const productOrderLink = productOrder.nextElementSibling;

    if (!card.classList.contains('disabled')) {
      toggleClass(card, 'selected');
      changeText(productOrder, currentText);
      productOrderLink.classList.toggle('hide');  
    }
    
  })
})

productOrderLinkList.forEach(productOrderLink => {
  productOrderLink.addEventListener('click', e => {
    const productOrderLink = e.currentTarget;
    const productOrder = productOrderLink.previousElementSibling;
    const card = productOrder.previousElementSibling;

    toggleClass(card, 'selected');
    changeText(productOrder, currentText);
    toggleClass(productOrderLink, 'hide');
  })
})


cardList.forEach(function(card) {
  card.addEventListener('mouseenter', e => {
      let card = e.currentTarget;
      let description = card.firstElementChild;
           
      if (card.classList.contains('selected')) {
        description.textContent = texts.description;
        description.classList.add('hover');
      }
    
     });
  card.addEventListener('mouseleave', e => {
    let card = e.currentTarget;
    let description = card.firstElementChild;
   
    if ( description.textContent === texts.description ) {
      description.textContent = 'Сказочное заморское яство';
      description.classList.remove('hover');
    }

});   

})


function changeText(element, currentText) {
  if (element.textContent === currentText) {
    if (element.dataset.order === 'liver') {
      element.textContent = texts.liver;
    }
    else if (element.dataset.order === 'fish') {
      element.textContent = texts.fish;
    }
    else if (element.dataset.order === 'chicken') {
      element.textContent = texts.chicken;
    }
  } else {
    element.textContent = currentText;
  }
}

function toggleClass(element, className) {
  element.classList.toggle(className);
}
