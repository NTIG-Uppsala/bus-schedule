import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iw-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit {
  @Input() width: number = 121;
  @Input() height: number = 106;

  public _width: string = '121px';
  public _height: string = '106px';

  constructor() {}

  ngOnInit() {
    this._width = this.width + 'px';
    this._height = this.height + 'px';
  }
}
