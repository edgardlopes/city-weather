import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from './weather.service';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mycity-weather';
  weather: any
  notFound: boolean
  isLoading: boolean = false


  constructor(private service: WeatherService){}

  ngOnInit(){
  }

  search(cityName) {
    if(!cityName){
      this.weather = undefined
      this.isLoading = false
    } else {
      this.isLoading = true
      this.service.currentWeather(cityName).subscribe(res => {
        console.log(res)
        this.weather = res
        this.notFound = false
        this.isLoading = false
      }, err => {
        this.weather = undefined
        this.notFound = true
        this.isLoading = false
      })  
    }
  }


}
