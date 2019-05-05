import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class WeatherService {

    constructor(private http: HttpClient){}

    currentWeather(cityName: string): Observable<any>{
        return this.http.get(`${environment.apiUrl}/weather?q=${cityName}&appid=${environment.appId}&lang=pt&units=metric`)
    }

}