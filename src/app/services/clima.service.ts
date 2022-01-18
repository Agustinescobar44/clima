import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'https://api.openweathermap.org/data/2.5/weather?appid='
  APIKEY = 'd388fb3e9d6856ef2996c4068e507ec0';

  constructor(private http: HttpClient) { }

  getClima(ciudad:string): Observable<any>{
    const URL = this.url + this.APIKEY + '&q=' + ciudad
    return this.http.get(URL)
  }

}
