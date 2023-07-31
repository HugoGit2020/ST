import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import { Router, Routes } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { TiendasComponent } from './tiendas/tiendas.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public forecasts?: WeatherForecast[];

  //constructor(http: HttpClient) {
  //  http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}

  constructor() {

  }

  title = 'angularapp';

  Ingresar() {

  }

}




//interface WeatherForecast {
//  date: string;
//  temperatureC: number;
//  temperatureF: number;
//  summary: string;
//}
