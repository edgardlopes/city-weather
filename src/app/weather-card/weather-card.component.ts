import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent implements OnInit {

  @Input()
  weather: any

  constructor() { }

  ngOnInit() {
  }

  toKmH(ms: number): string{
    return (ms * 3.6).toFixed(2)
  }

}
