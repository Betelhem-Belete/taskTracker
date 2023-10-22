const confirmEl = documnet.querySelector('.confirm'),
  closeEl = documnet.querySelector('.close'),
  title = documnet.querySelector('.title'),
  content = documnet.querySelector('.content'),
  btnOk = documnet.querySelector('.btn-ok'),
  btnCancel = documnet.querySelector('.btn-cancel');

//custom confirm box xlass
class ShowConfirm {
  constructor(title, content, ok, cancel) {
    this.title = title;
    this.content = content;
    this.ok = ok;
    this.cancel = cancel;
  }

  //Show confirm box
  trigger(callbackFn) {
    title.textContent = this.title;
    content.textContent = this.content;
    btnOk.innerText = this.ok;
    btnCancel.innerText = this.cancel;

    confirmEl.classList.remove('close-modal');

    closeEl.addEventListener('click', this.closeModal);
    cancelBtn.addEventListener('click', this.closeModal);

    btnOk.addEventListener('click', () => {
      callbackFn();
      this.closeModal();
    });
  }

  //Close Modal Method
  closeModal() {
    confirmEl.classList.add('close-modal');
  }
}
