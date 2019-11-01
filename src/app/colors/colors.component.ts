import { Component, OnInit } from '@angular/core';
import { Color } from '../color';
import { COLORS } from '../colors-list';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colors = COLORS;

  selectedColor: Color;
  onSelect(color: Color): void {
    this.selectedColor = color;
  }

  constructor() { }

  ngOnInit() {
  }

}
