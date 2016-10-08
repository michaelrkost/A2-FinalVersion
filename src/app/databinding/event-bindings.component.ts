import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mrk-event-bindings',
  template: `
    <button (click)="onClickedEvent()">Click me!</button>
  `,
  styles: []
})
export class EventBindingsComponent {
  @Output() clicked = new EventEmitter<string>();
  onClickedEvent(){
    this.clicked.emit('EventBindingsComponent Worked Just Ducky!')
  }
}
