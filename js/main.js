'use strict';


const cardList = document.querySelectorAll('.card');
const cardItems = [].slice.call(cardList);
const productOrderLinkList = document.querySelectorAll('.product-order__link');
const productOrderLinkItems = [].slice.call(productOrderLinkList);
const productOrder = document.querySelector('.product-order');
const currentText = productOrder.textContent;
const inputList = document.querySelectorAll('input[type="checkbox"]') 
const inputItems = [].slice.call(inputList);
const texts = {
  description: 'Котэ не одобряет?',
  liver: 'Печень утки разварная с артишоками.',
  fish: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
  chicken: 'Филе из цыплят с трюфелями в бульоне.',
  liverDisabled: 'Печалька, с фуа-гра закончился',
  fishDisabled: 'Печалька, с рыбой закончился',
  chickenDisabled: 'Печалька, с курой закончился'
};



inputItems.forEach(input => {
  const event = new Event('disable');
  input.addEventListener('disable', e => {
    const product = e.currentTarget.parentElement
    const productOrderLink = product.lastElementChild
    const productOrder = productOrderLink.previousElementSibling;
    
    if(input.disabled) {
      productOrderLink.classList.add('hidden')
      disableText(input.value, productOrder);
      productOrder.classList.add('disabled')
    }
    
  })
  input.dispatchEvent(event);
})













cardItems.forEach(card => {
  card.addEventListener('click', e => {
    const card = e.currentTarget;
    const input = card.previousElementSibling;
    const productOrder = card.nextElementSibling;
    const productOrderLink = productOrder.nextElementSibling;
   
    if (!input.disabled) {
      changeDescription(productOrder, currentText);
      productOrderLink.classList.toggle('hidden');
    }    
      
  });
});

productOrderLinkItems.forEach(productOrderLink => {
  productOrderLink.addEventListener('click', e => {
    const productOrderLink = e.currentTarget;
    const productOrder = productOrderLink.previousElementSibling;
    const input = productOrder.parentElement.firstElementChild;

    changeDescription(productOrder, currentText);
    checkedElement(input);
    productOrderLink.classList.toggle('hidden');
  });
});

cardItems.forEach(function(card) {
  card.addEventListener('mouseenter', e => {
    let card = e.currentTarget;
    let input = card.previousElementSibling;
    let description = card.firstElementChild;

    if (input.checked && !input.disabled) {
      description.textContent = texts.description;
      description.classList.add('hover');
    }
  });
  card.addEventListener('mouseleave', e => {
    let card = e.currentTarget;
    let input = card.previousElementSibling;
    let description = card.firstElementChild;

    if (description.textContent === texts.description) {
      description.textContent = 'Сказочное заморское яство';
      description.classList.remove('hover');
    }
  });
});

function changeDescription(element, currentText) {
  if (element.textContent === currentText) {
    if (element.dataset.order === 'liver') {
      element.textContent = texts.liver;
    } else if (element.dataset.order === 'fish') {
      element.textContent = texts.fish;
    } else if (element.dataset.order === 'chicken') {
      element.textContent = texts.chicken;
    }
  } else {
    element.textContent = currentText;
  }
}

function disableText(value, element) {
  if (value === 'liver') {
    element.textContent = texts.liverDisabled;
  }
  else if (value === 'fish') {
    element.textContent = texts.fishDisabled;
  }
  else if (value === 'chicken') {
    element.textContent = texts.chickenDisabled;
  }
}

function checkedElement(element) {
  if (element.checked) {
    element.checked = false;
  } else {
    element.checked = true;
  }
}


