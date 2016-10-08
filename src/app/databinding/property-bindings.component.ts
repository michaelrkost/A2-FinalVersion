import { Component, Input } from '@angular/core';

@Component({
  selector: 'mrk-property-bindings',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertyBindingsComponent {
@Input()  result: number = 0;
}
