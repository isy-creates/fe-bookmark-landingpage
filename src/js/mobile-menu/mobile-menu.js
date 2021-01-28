class MobileMenu  {
  constructor() {
    this.button = document.querySelector('.hamburger-menu');
    this.header = document.querySelector('.header');
    this.body = document.getElementsByTagName('body')[0];
    this.menu = document.querySelector('.menu');

    this.events();
  }

  events() {
    this.button.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.header.classList.toggle('is--mobile');
    this.body.classList.toggle('prevent-scrolling');
    this.menu.classList.toggle('hide-on-mobile');
    this.menu.classList.toggle('menu--is-mobile');
  }


}

export default MobileMenu;