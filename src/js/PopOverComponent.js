/* eslint-disable class-methods-use-this */

export default class PopOverComponent {
  constructor(parentEl, obj) {
    this.parentEl = parentEl;
    const { title, text } = obj;
    this.title = title;
    this.text = text;
  }

  get markup() {
    return `
    <button data-id="my-popoverButton" class="my-popoverButton" type="">Click to toggle my-popover</button>
    <div data-id="my-popover" class="my-popover my-popover-invisible">
      <div data-id="my-popover-title" class="my-popover-title">
        <div data-id="my-popover-title-text" class="my-popover-title-text">${this.title}</div>
      </div>
      <div data-id="my-popover-body" class="my-popover-body">
        <div data-id="my-popover-body-text" class="my-popover-body-text">${this.text}</div>
      </div>
    </div>
    `;
  }

  get myPowerButton() {
    return '[data-id=my-popoverButton]';
  }

  get myPopover() {
    return '[data-id=my-popover]';
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.markup;
    const myButton = this.parentEl.querySelector(this.myPowerButton);
    myButton.addEventListener('click', () => this.toggleDisplay());
    const myPopover = this.parentEl.querySelector(this.myPopover);
    myPopover.addEventListener('click', () => this.toggleDisplay());
  }

  toggleDisplay() {
    const dispClass = 'my-popover-invisible';
    const myPopover = this.parentEl.querySelector(this.myPopover);
    const myButton = this.parentEl.querySelector(this.myPowerButton);
    if (myPopover.classList.contains(dispClass)) {
      myPopover.classList.remove(dispClass);
      myPopover.style.width = `${myButton.offsetWidth}px`;
      myPopover.style.top = `${myButton.offsetTop - myPopover.offsetHeight}px`;
      myPopover.style.left = `${myButton.offsetLeft}px`;
    } else {
      myPopover.classList.add(dispClass);
    }
  }
}
