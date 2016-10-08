import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrk-property-bindings',
  template: `
    Here is the #: {{result}}
  `,
  styles: []
})
export class PropertyBindingsComponent {
@Input()  result: number = 0;
}
