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

    console.log(this.emailRegEx);

    if (this.input.value.search(this.emailRegEx) == -1) {
      this.input.classList.add('has--error');
      this.button.setAttribute('disabled', 'disabled');
    } else {
      this.input.classList.remove('has--error');
    }
  }
}

export default FormCheck;

//add the icon to the error message
//style disabled button

//create functions which takes care of adding and removing class and attribute
