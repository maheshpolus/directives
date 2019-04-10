/**
 * @authour Mahesh Sreenath V M
 * https://github.com/maheshpolus/directives
 */
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyboardListener]'
})
export class KeyboardListenerDirective  {
  @Output() onEscape: EventEmitter<any> = new EventEmitter();
  counter = -1;

  constructor() { }
  @HostListener('keydown.arrowdown') arrowDown() {
    event.preventDefault();
    this.removeHighlight();
    this.counter < document.getElementsByClassName('app-kb-listener').length - 1 ?  this.counter++ : this.counter = 0;
    this.addHighlight();
  }
  @HostListener('keydown.arrowup') arrowUp() {
    event.preventDefault();
    this.removeHighlight();
    this.counter > 0 ? this.counter-- :  this.counter = document.getElementsByClassName('app-kb-listener').length - 1;
    this.addHighlight();
  }
  @HostListener('keydown.enter') keyEnter() {
    event.preventDefault();
    (document.getElementsByClassName('app-kb-listener')[this.counter] as HTMLInputElement).click();
    (document.activeElement as HTMLInputElement).blur();
    this.counter = -1;
  }
  @HostListener('keydown.esc') keyEsc() {
    this.cancelSearch();
  }
  @HostListener('focusout') cancel() {
    this.cancelSearch();
  }
  cancelSearch() {
    this.counter = -1;
    this.onSelect.emit(false);
  }
  removeHighlight() {
    const el = (document.getElementsByClassName('app-kb-listener')[this.counter] as HTMLInputElement);
    if (el) {
      el.classList.remove('app-item-highlighted');
    }
  }
  addHighlight() {
    const el = (document.getElementsByClassName('app-kb-listener')[this.counter] as HTMLInputElement);
    if (el) {
      el.classList.add('app-item-highlighted');
    }
  }
}
