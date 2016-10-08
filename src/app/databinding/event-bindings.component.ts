import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mrk-event-bindings',
  template: `
    <button (click)="onClicked()">Click me!</button>
  `,
  styles: []
})
export class EventBindingsComponent {
  @Output() clicked = new EventEmitter<string>();
  onClicked(){
    this.clicked.emit('EventBindingsComponent Worked!')
  }
}
