class FormCheck {
  constructor() {
    this.input = document.getElementById('input');
    this.button = document.getElementById('submit');
    this.emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    this.events();
  }

  events() {
    this.input.addEventListener('blur', () => this.checkMail());
  }

  checkMail() {

    if (this.input.value.search(this.emailRegEx) == -1) {
      this.input.classList.add('has--error');
      this.button.setAttribute('disabled', 'disabled');
    } else {
      this.input.classList.remove('has--error');
      this.button.removeAttribute('disabled', 'disabled');
    }
  }
}

export default FormCheck;

