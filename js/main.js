'use strict';

(function() {
  const cardList = document.querySelectorAll('.card');
  const cardItems = [].slice.call(cardList);
  const productOrderLinkList = document.querySelectorAll('.product-order__link');
  const productOrderLinkItems = [].slice.call(productOrderLinkList);
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
  
  cardItems.forEach(card => {
    const event = new Event('disable');
  
    card.addEventListener('click', e => {
      const card = e.currentTarget;
      const productOrder = card.nextElementSibling;
      const productOrderLink = productOrder.nextElementSibling;
  
      if (!card.classList.contains('disabled')) {
        toggleClass(card, 'selected');
        changeDescription(productOrder, currentText);
        productOrderLink.classList.toggle('hidden');  
      }    
    })
  
    card.addEventListener('disable', e => {
      const card = e.currentTarget;
      const productOrder = card.nextElementSibling;
      const productOrderLink = productOrder.nextElementSibling;
  
      if (card.classList.contains('disabled')) {
        console.log('a')
        productOrderLink.classList.add('hidden');
        productOrder.classList.add('disabled');
        changeOrder(productOrder, card.dataset.card)
      }
    })
    card.dispatchEvent(event)
  })
  
  productOrderLinkItems.forEach(productOrderLink => {
    productOrderLink.addEventListener('click', e => {
      const productOrderLink = e.currentTarget;
      const productOrder = productOrderLink.previousElementSibling;
      const card = productOrder.previousElementSibling;
  
      toggleClass(card, 'selected');
      changeDescription(productOrder, currentText);
      toggleClass(productOrderLink, 'hidden');
    })
  })
  
  
  cardItems.forEach(function(card) {
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
  
  
  function changeDescription(element, currentText) {
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
  
  function changeOrder(element, value) {
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
  
  function toggleClass(element, className) {
    element.classList.toggle(className);
  }
  


})();
