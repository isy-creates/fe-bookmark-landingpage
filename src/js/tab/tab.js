class Tab {
  constructor() {
    this.trigger = document.querySelectorAll('li[data-trigger]');
    this.content = document.querySelectorAll('div[data-tab-content]');
    this.magicLine = document.getElementById('magic-line');

    this.events();
  }

  events() {
    this.trigger.forEach(el => el.addEventListener('click', (e) => this.getActiveTab(e)));
  }

  getActiveTab(e) {
    e.preventDefault();
    const elementValue = (e.target.closest('li').dataset.trigger);
    const content = document.querySelector(`div[data-tab-content="${elementValue}"]`);

    this.iterateOver(this.trigger);
    this.iterateOver(this.content);
    this.moveMagicLine(elementValue);
    e.target.closest('li').classList.add('is--active');
    content.classList.add('is--active');

  }

  iterateOver(list) {
    list.forEach(item => item.classList.remove('is--active'));
  }

  moveMagicLine(elementValue) {
    //1.value 2 + 33
    // value 3 + 66 
    // bedeutet immer 33.33 hoch
    const movingDistance = (elementValue - 1) * 33.33;
    this.magicLine.style.left = movingDistance+'%';
  }
}

export default Tab;

//1. hol alle Tab links
//2. registriere klick auf TTab
//3. entferne tab__link--is-active 
//4. füge tab__link--is-active auf dem geklicken Element hinzu
//5. hol den Wert von dem event data-tab-trigger
//6. entferne alle is--visible von content 
//7. füge is--visible zum content hinzu, dessen data-tab-content === data-tab-trigger wert ist 