import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mrk-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is string Interpolation.';
  numberInterpolation = 2;
}
