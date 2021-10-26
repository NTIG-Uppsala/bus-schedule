import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iw-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {
  @Input() width: number = 500;
  @Input() height: number = 200;

  public _width: string = '500px';
  public _height: string = '500px';

  constructor() {}

  ngOnInit() {
    this._width = this.width + 'px';
    this._height = this.height + 'px';
  }
}
