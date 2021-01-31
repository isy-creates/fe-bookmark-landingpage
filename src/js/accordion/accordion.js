class Accordion {
  constructor() {
    this.head = document.querySelectorAll('.accordion__head');
    this.body = document.querySelectorAll('.accordion__answer');

    this.events();
  }

  events() {
    this.head.forEach(el => el.addEventListener('click', (e) => this.toggleAccordion(e)));
  }

  toggleAccordion(e) {

    this.removeHeight();
    
    if (e.target.classList.contains('accordion__head--is-open')) {
      e.target.nextElementSibling.style.height = '0px';
      e.target.classList.remove('accordion__head--is-open');
    } else {
      this.closeAll();
      this.setHeight(e);
      e.target.classList.toggle('accordion__head--is-open');
    }
   
  }

  closeAll() {
    this.removeHeight();
    this.head.forEach(el => (el.classList.remove('accordion__head--is-open')));
  }

  setHeight(e) {
    e.target.nextElementSibling.style.height = e.target.nextElementSibling.scrollHeight + 'px';
  }

  removeHeight() {
    this.body.forEach(el => (el.style.height = '0px'));
  }
}

export default Accordion;