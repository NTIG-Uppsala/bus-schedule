import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StopDeparture } from 'src/app/stop-departure';
import { MatRipple } from '@angular/material';

@Component({
  selector: 'iw-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {
  public thisIsProgress: number;
  public deviation: { title: string; text: string; severity: number };
  @ViewChild(MatRipple) ripple: MatRipple;
  _departures: { [buss: string]: { [stop: string]: Array<StopDeparture>; } } = {};
  _directions: { [stop: string]: Array<StopDeparture>; } = {};

  _stopName: string;

  _stop: string;
  @Input() set stop(stop: string) {
    this._stop = stop;
  }
  get stop() {
    return this._stop;
  }

  ngOnInit() { }

  @Input() set departures(departures: { [buss: string]: { [stop: string]: Array<StopDeparture>; } }) {
    this._departures = departures;
    this._stopName = departures[Object.keys(departures)[0]][0]['stopName'];
  }
  get departures() {
    return this._departures;
  }

  get directions() {
    return this._directions;
  }



  /** Shows a centered and persistent ripple. */
  launchRipple() {
    const rippleRef = this.ripple.launch({
      persistent: true,
      centered: true,
      animation: {
        enterDuration: 1000,
        exitDuration: 1000
      }
    });

    // Fade out the ripple later.
    rippleRef.fadeOut();
  }

  constructor() {
    setInterval(() => {
      if (this.ripple) {
        this.launchRipple();
      }
    }, 15000);
  }
}
